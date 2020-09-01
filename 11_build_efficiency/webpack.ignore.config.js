const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-ignore': './src/example-ignore.js',
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // new webpack.IgnorePlugin({
    //   resourceRegExp: /^\.\/lib\/locales$/,
    //   contextRegExp: /faker$/,
    // }),
  ],
})
