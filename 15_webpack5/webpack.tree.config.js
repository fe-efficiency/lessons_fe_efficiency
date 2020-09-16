const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'tree-commonjs': './src/example-tree-commonjs.js',
    'tree-nested': './src/example-tree-nested.js',
  },
  output: {
    ecmaVersion: 5,
  },
  optimization: {
    // innerGraph: false,
    // usedExports: false,
    // providedExports: false,
    concatenateModules: false,
    //mangleExports: false,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: ['babel-loader'],
  //     },
  //   ],
  // },
})
