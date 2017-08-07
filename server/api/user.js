import moment from 'moment'
import objectIdToTimestamp from 'objectid-to-timestamp'
import sha1 from 'sha1'
import url from 'url'
import { createToken } from '../token'
import { responseError, responseSuccess } from '../../utils/ctx'
import ERRORS from '../../utils/errno'

export default function (router) {
  router.all('/api/user/signup', signup)
  router.all('/api/user/signin', signin)
  router.post('/api/user/get', get)
}

async function signup (ctx, next) {
  let req = ctx.method === 'GET' 
              ? url.parse(ctx.request.url, true).query
              : ctx.request.body
  let existName = await ctx.mongo.db('member').collection('user').find({ username: req.username || ''}).toArray()
  let existEmail = await ctx.mongo.db('member').collection('user').find({ email: req.email || ''}).toArray()

  if (existName.length) {
    responseError(ctx, 'USER_NAME_REGISTERED')
  } else {
    if (existEmail.length) {
      responseError(ctx, 'USER_EMAIL_REGISTERED')
    } else {
      let now = +new Date()
      let user = {
        username: req.username,
        email: req.email,
        password: sha1(req.password), // 加密
        token: createToken(req.email), // 创建token并存入数据库
        create_time: moment(now).format('YYYY-MM-DD HH:mm:ss')
      }
      let result = await ctx.mongo.db('member').collection('user').insert(user)

      responseSuccess(ctx)
    }
  }
}

async function signin (ctx, next) {
  let req = ctx.method === 'GET' 
            ? url.parse(ctx.request.url, true).query
            : ctx.request.body

  let email = req.email
  let password = sha1(req.password);
  let userExist = await ctx.mongo.db('member').collection('user').find({ email }).toArray()

  if (!userExist.length) {
    responseError(ctx, 'USER_EMAIL_NOT_REGISTERED')
  } else {
    let user = userExist[0]
    if (user.password === password) {
      //生成一个新的token,并存到数据库
      let token = createToken(email)
      let query = { email }
      let update = { '$set': user}
      user.token = token

      let result = await ctx.mongo.db('member').collection('user').updateOne(query, update)

      ctx.cookies.set('token', token)
      responseSuccess(ctx, { email, token }) // TODO 登录成功要创建一个新的token,应该存入数据库

    } else{
      responseError(ctx, 'USER_PASSWORD_INCORRECT')
    }
  }
}

async function get (ctx, next) {
  let req = ctx.request.body
  let token = req.token
  let userExist = await ctx.mongo.db('member').collection('user').find({ token }).toArray()

  if (!userExist.length) {
    responseError(ctx, 'USER_NOT_EXIST')
  } else {
    let user = userExist[0]
    responseSuccess(ctx, { user })
  }
}