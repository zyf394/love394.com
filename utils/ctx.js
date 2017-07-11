import ERRORS from './errno'

export function responseError(ctx, type) {
  ctx.status = 200
  ctx.body = {
    errno: ERRORS[type].errno,
    errmsg: ERRORS[type].errmsg
  }
}
export function responseSuccess(ctx, data = {}) {
  ctx.status = 200
  ctx.body = {
    errno: 0,
    errmsg: 'success',
    data
  }
}