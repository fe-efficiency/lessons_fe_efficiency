const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    gen: './src/example-generation.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name]-[contenthash:8].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    logging: 'verbose',
  },
  cache: {
    type: 'filesystem',
    name: 'w5cache',
    cacheLocation: path.resolve(__dirname, '.appcache'),
    buildDependencies: {
      config: [__filename],
    },
  },
})
