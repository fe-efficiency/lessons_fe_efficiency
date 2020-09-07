const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
var TerserPlugin = require('terser-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  entry: {
    'example-terser-opts': './src/example-terser-opts.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
        terserOptions: {
          compress: false,
          mangle: false,
        },
      }),
    ],
  },
})
