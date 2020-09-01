const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
const threadLoader = require('thread-loader')

threadLoader.warmup({}, [
  'babel-loader',
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
])

module.exports = merge(common, {
  entry: {
    'example-thread': './src/example-thread.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //include: /src/,
        use: ['thread-loader', 'babel-loader'],
      },
    ],
  },
})
