const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-dll': './src/example-dll.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/vendor_manifest.json'),
    }),
  ],
})
