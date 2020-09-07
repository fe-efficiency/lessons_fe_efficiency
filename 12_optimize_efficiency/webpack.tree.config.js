const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
var TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  entry: {
    'example-tree': './src/example-tree.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: ['babel-loader'],
  //     },
  //   ],
  // },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
      }),
    ],
  },
})
