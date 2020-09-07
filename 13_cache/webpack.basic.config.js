const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-basic': './src/example-basic.js',
  },
})
