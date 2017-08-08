let memberCache
let userCache

export function MemberModel (ctx) {
  if (!memberCache) {
    memberCache = ctx.mongo.db('member').collection('member')
  }
  return memberCache
}

export function User (ctx) {
  if (!userCache) {
    userCache = ctx.mongo.db('member').collection('user')
  }
  return userCache
}