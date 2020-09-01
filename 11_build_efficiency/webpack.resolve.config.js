const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-resolve': './src/example-resolve.js',
  },
  resolve: {
    modules: Array(100)
      .fill('')
      .map((item, index) => '../node_modules' + index)
      .concat(['../node_modules']),
    extensions: Array(100)
      .fill('')
      .map((item, index) => '.ex' + index)
      .concat(['.js']),
    mainFiles: Array(100)
      .fill('')
      .map((item, index) => 'index' + index)
      .concat(['index']),
    symlinks: false,
  },
})
