var webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-lodash': './src/example-lodash.js',
  },
})
