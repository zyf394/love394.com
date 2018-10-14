import querystring from 'querystring'
import url from 'url'
import moment from 'moment'
import { ObjectId } from 'mongodb'
import { responseError, responseSuccess } from '../../utils/ctx'
import ERRORS from '../../utils/errno'
import { MemberModel } from '../db/index'
export default function (router) {
  router.post('/api/member/add', add)
  router.post('/api/member/edit', edit)
  router.post('/api/member/remove', remove)
  router.get('/api/member/list', findAll)
  router.post('/api/member/list', editAll)
}

export async function add (ctx, next) {
  const req = ctx.request.body
  const query = { name: req.name }
  const exits = await ctx.mongo.db('member').collection('member').find(query).toArray()

  if (exits.length) {
    responseError(ctx, next, 'MEMBER_EXIST')
  } else {
    const member = {
      name: req.name || '',
      phone: req.phone || '',
      is_payed: req.is_payed || 0,
      is_enrolled: req.is_enrolled || 0,
      enrolled_time: +new Date(),
      payed_time: +new Date()
    }
    const result = await ctx.mongo.db('member').collection('member').insert(member)
    responseSuccess(ctx, next)
  }
}
export async function remove (ctx, next) {
  const query = ctx.request.body || {}
  query._id = ObjectId(query._id)
  try {
    const result = await ctx.mongo.db('member').collection('member').deleteOne(query)
    if (result.result.ok) {
      responseSuccess(ctx, next)
    }
  } catch (e) {
    console.log(e)
  }
}
export async function findOne (ctx, next) {
  const query = ctx.request.body || {}
  query._id = ObjectId(query._id)
  ctx.body = await ctx.mongo.db('member').collection('member').find(query).toArray()
}
export async function findAll(ctx, next) {
  const query = url.parse(ctx.request.url, true).query
  const skipNum = (query.page - 1) * 10
  const limitNum = parseInt(query.pageSize)
  try {
    ctx.body = await MemberModel(ctx).find({}).skip(skipNum).limit(limitNum).toArray()
  } catch (e) {
    console.log(e)
  }
}
export async function editAll(ctx, next) {
  const req = ctx.request.body
  const list = req.data || []

  try {
    for (let i = 0; i < list.length; i++) {
      let query = {
        _id: ObjectId(list[i]._id)
      }
      let update = {
        '$set': {
          name: list[i].name,
          phone: list[i].phone,
          is_payed: list[i].is_payed,
          is_enrolled: list[i].is_enrolled,
          enrolled_time: list[i].enrolled_time,
          pay_time: list[i].pay_time
        }
      }
      try {
        let result = await ctx.mongo.db('member').collection('member').update(query, update, { upsert: true })
      } catch (e) {
        console.log(e)
      }
    }
    responseSuccess(ctx, next)
  } catch (e) {
    console.log(e)
  }
}
export async function edit (ctx, next) {
  let req = ctx.request.body
  let keys = Object.keys(req)
  let query = {
    name: req.name
  }
  let update = {}
  const exist = await ctx.mongo.db('member').collection('member').find(query).toArray()

  if (exist.length) {
    if (req.is_enrolled && exist[0].is_enrolled) {
      responseError(ctx, next, 'MEMBER_ENROLLED')
    } else if (req.is_payed && exist[0].is_payed) {
      responseError(ctx, next, 'MEMBER_PAYED')
    } else {
      update = _serielizeUpdate(req)
      try {
        const result = await ctx.mongo.db('member').collection('member').updateOne(query, update)
        if (result.result.ok) {
          responseSuccess(ctx, next)
        } else {
          console.log(result.result)
        }
      } catch (e) {
        console.log(e)
      }
    }
  } else {
    responseError(ctx, next, 'MEMBER_NOT_CLASSMATE')
  }
}

function _serielizeUpdate (req) {
  let update = {}
  let now = +new Date()
  let query = req
  let keys = Object.keys(req)
  keys.forEach(item => {
    if (!update['$set']) {
      update['$set'] = {}
    }
    if (item !== '_id') {
      if (item === 'is_enrolled' && query.is_enrolled === 1) {
        update['$set']['enrolled_time'] = moment(now).format('YYYY-MM-DD HH:mm:ss')
      }
      if (item === 'is_payed' && query.is_payed === 1) {
        update['$set']['payed_time'] = moment(now).format('YYYY-MM-DD HH:mm:ss')
      }
      update['$set'][item] = req[item]
    }
  })
  return update
}
