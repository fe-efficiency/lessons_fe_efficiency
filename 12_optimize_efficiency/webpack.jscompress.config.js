const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
var TerserPlugin = require('terser-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  entry: {
    // 'example-lodash': './src/example-lodash.js',
    // 'example-moment': './src/example-moment.js',
    'example-antd': './src/example-antd.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
        terserOptions: {
          //compress: false,
          mangle: false,
        },
      }),
      // new UglifyJSPlugin({
      //   cache: false,
      // }),
    ],
  },
})
