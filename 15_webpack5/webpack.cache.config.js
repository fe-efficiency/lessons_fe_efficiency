const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.config')
var a = 2
module.exports = merge(common, {
  entry: {
    foo: './src/foo.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: ['babel-loader'],
  //     },
  //   ],
  // },
  output: {
    filename: '[name]-[contenthash:8].js',
  },
  // cache: {
  //   type: 'filesystem',
  //   name: 'w5cache',
  //   cacheLocation: path.resolve(__dirname, '.appcache'),
  //   buildDependencies: {
  //     config: [__filename],
  //   },
  //   // version: '11',
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
})
