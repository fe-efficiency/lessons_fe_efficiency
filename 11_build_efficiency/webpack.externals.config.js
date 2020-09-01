const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-externals': './src/example-externals.js',
  },
  externals: {
    jquery: 'jquery',
  },
})
