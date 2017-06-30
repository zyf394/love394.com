import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth'

export default function (ctx) {
  const { isServer, store, req } = ctx
   // If nuxt generate, pass this middleware
  // if (isServer && !req) return
  const token = isServer ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  store.commit('SET_TOKEN', token)
}