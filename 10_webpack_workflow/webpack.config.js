var webpack = require('webpack')
var SamplePlugin = require('./SamplePlugin')

module.exports = {
  entry: {
    simple: './src/simple.js',
    withImport: './src/withImport.js',
  },
  mode: 'production',
  devtool: false,
  plugins: [new SamplePlugin()],
  recordsPath: require('path').join(__dirname, 'records.json'),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
