import ERRORS from './errno'

export async function responseError(ctx, next, type) {
  ctx.status = 200
  ctx.body = {
    errno: ERRORS[type].errno,
    errmsg: ERRORS[type].errmsg
  }
  if (typeof next === 'function') {
    await next()
  }
}
export async function responseSuccess(ctx, next, data = {}) {
  ctx.status = 200
  ctx.body = {
    errno: 0,
    errmsg: 'success',
    data
  }
  if (typeof next === 'function') {
    await next()
  }
}