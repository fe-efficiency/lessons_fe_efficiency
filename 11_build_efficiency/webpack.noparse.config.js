const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-noparse': './src/example-noparse.js',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.js$/,
        //exclude: /jquery|lodash/,
        use: ['babel-loader'],
      },
    ],
  },
})
