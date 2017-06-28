import Cookie from 'js-cookie'

export const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const checkRedirectUrl = () => {
  const params = getQueryParams()
  if (params.redirect_url) {
    window.location.href = window.decodeURIComponent(params.redirect_url)
  }
}

export const getToken = () => {
  return window.localStorage ? getTokenFromLocalStorage() : getTokenFromCookie()
}

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
  Cookie.set('token', token)
}

export const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return
  const token = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
  return token
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token')
}