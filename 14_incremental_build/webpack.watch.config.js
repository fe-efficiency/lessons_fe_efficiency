const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-basic': './src/example-basic.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name]-[contenthash:8].js',
  },
  stats: 'verbose',
})
