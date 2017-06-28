import path from 'path'
import Router from 'koa-router'
import createApi from '../api'
import auth from '../db/auth'
import mongo from 'koa-mongo'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session2'

export default function(app, nuxt) {
  const router = new Router()

  createApi(router)

  app
    .use(session({
      key: "SESSIONID"
    }))

  app
    .use(mongo({
      user: auth.username,
      pass: auth.password,
      host: '127.0.0.1',
      port: 27017,
      db: 'member'
    }))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx, next) => {
      ctx.status = 200 // koa defaults to 404 when it sees that status is unset
      await nuxt.render(ctx.req, ctx.res)
    })
}