import jwt from 'jsonwebtoken'

export function createToken(user_email) {
  const token = jwt.sign({ user_email: user_email }, 'love394', { expiresIn: '720h' })
  return token
}

export async function checkToken(ctx, next) {
  if(ctx.request.header['authorization']){
    let token = ctx.request.header['authorization'].split(' ')[1]
    let decoded = jwt.decode(token, 'love394');

    if(token && decoded.exp <= new Date()/1000){
      ctx.status = 401;
      ctx.body = {
        message: 'token过期'
      }
    } else {
      return next()
    }
  }else{
      ctx.status = 401
      ctx.body = {
          message: '没有token'
      }
  }
}