const { join, resolve } = require('path')
const fs = require('fs')
const webpack = require('webpack');
const content = fs.readFileSync(resolve('./assets/js/rem.js'), 'utf8')

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'check-auth'
  },
  head: {
    title: 'love394',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        innerHTML: content
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: resolve(__dirname + '/assets/css/variable.styl'),
      lang: 'stylus'
    },
    {
      src: resolve(__dirname + '/assets/css/main.styl'),
      lang: 'stylus'
    } // 指定 scss 而非 sass
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#ffaca8'
  },
  build: {
    module: {
      rules: [
        {
          // 在页面中加载图片示例：var imgstr = require("./imgs/3.png")
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            {
              loader: 'url-loader',
              query: {
                limit: 8192,
                name: 'images/[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(pug|jade)$/,
          use: ['pug-loader']
        },
        {
          // 编译es6
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    vendor: [
      'axios'
    ],
    postcss: [
      require('postcss-px2rem')({remUnit: 46.875})
    ]
  }
}
