import ERRORS from './errno'

export async function responseError(ctx, next, type) {
  try {
    ctx.body = {
      errno: ERRORS[type].errno,
      errmsg: ERRORS[type].errmsg
    }
    if (typeof next === 'function') {
      await next()
    }
  } catch (e) {
    console.error(`[ERROR CONTEXT]: ${ctx.method} ${ctx.path} in responseError \n[ERROR STACK]:\n`, e)
  }
}
export async function responseSuccess(ctx, next, data = {}) {
  try {
    ctx.body = {
      errno: 0,
      errmsg: 'success',
      data
    }
    if (typeof next === 'function') {
      await next()
    }
  } catch (e) {
    console.error(`[ERROR CONTEXT]: ${ctx.method} ${ctx.path} in responseSuccess \n[ERROR STACK]:\n`, e)
  }
}