const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-babel': './src/example-basic.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['cache-loader', 'babel-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
})
