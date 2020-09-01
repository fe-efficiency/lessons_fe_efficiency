const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-inexclude': './src/example-inexclude.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src|jquery/, //这里的include jquery将不生效，因为exclude优先级更高
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
})
