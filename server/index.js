import Koa from 'koa'

import Nuxt from 'nuxt'

import routes from './routes'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Build in development
  if (config.dev) {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  routes(app, nuxt)
  
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
