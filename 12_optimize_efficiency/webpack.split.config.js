const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
var TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  entry: {
    'example-split1': './src/example-split1.js',
    'example-split2': './src/example-split2.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
})
