import querystring from 'querystring'
import { ObjectId } from 'mongodb'

const ERRORS = {
  SUCCESS: {
    errno: 0,
    errmsg: 'success'
  },
  MEMBER_ENROLLED: {
    errno: 10001,
    errmsg: '您已报过名'
  },
  MEMBER_NOT_EXIST: {
    errno: 10002,
    errmsg: '您非本班成员，无法报名'
  },
  MEMBER_PAYED: {
    errno: 10003,
    errmsg: '您已交费'
  }
}

export default function (router) {
  router.post('/api/member/add', add)
  router.post('/api/member/edit', edit)
  router.post('/api/member/remove', remove)
  router.get('/api/member/list', findAll)
  router.post('/api/member/list', editAll)
}

export async function add (ctx, next) {
  const req = ctx.request.body
  const query = { name: req.name}
  const exits = await ctx.mongo.db('member').collection('member').find(query).toArray()

  if (exits.length) {
    ctx.body = {
      errno: 10001,
      errmsg: 'Member exits.'
    }
  } else {
    const member = {
      name: req.name || '',
      phone: req.phone || '',
      is_payed: req.is_payed || 0,
      is_enrolled: req.is_enrolled || 0,
      enrolled_time: +new Date(),
      pay_time: +new Date()
    }
    const result = await ctx.mongo.db('member').collection('member').insert(member)
    ctx.body = {
      errno: 0,
      errmsg: 'success'
    }
  }
}
export async function remove (ctx, next) {
  const query = ctx.request.body || {}
  query._id = ObjectId(query._id)
  try {
    const result = await ctx.mongo.db('member').collection('member').deleteOne(query)
    if (result.result.ok) {
      responseError(ctx, 'SUCCESS')
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
  const query = ctx.request.body || {}
  ctx.body = await ctx.mongo.db('member').collection('member').find(query).toArray()
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
      let result = await ctx.mongo.db('member').collection('member').update(query, update, { upsert: true })
    }
    responseError(ctx, 'SUCCESS')
  } catch (e) {
    console.log(e)
  }
}
export async function edit (ctx, next) {
  const req = ctx.request.body
  const keys = Object.keys(req)
  const query = {
    _id: ObjectId(req.id)
  }
  const update = {}
  const exist = await ctx.mongo.db('member').collection('member').find(query).toArray()
  if (exist.length) {
    if (req.is_enrolled && exist[0].is_enrolled) {
      responseError(ctx, 'MEMBER_ENROLLED')
    } else if (req.is_payed && exist[0].is_payed) {
      responseError(ctx, 'MEMBER_PAYED')
    }
  } else {
    keys.forEach(item => {
      if (!update['$set']) {
        update['$set'] = {}
      }
      update['$set'][item] = req[item]
    })
    try {
      const result = await ctx.mongo.db('member').collection('member').updateOne(query, update)
      if (result.result.ok) {
        responseError(ctx, 'SUCCESS')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

function responseError(ctx, type) {
  ctx.body = {
    errno: ERRORS[type].errno,
    errmsg: ERRORS[type].errmsg
  }
}
