var merge = require('webpack-merge');

module.exports = {
  webpack: (config, options, webpack) => {
    config = merge(config, {
      entry: {
        main: './server/index.js'
      }
    })
    return config
  }
}
