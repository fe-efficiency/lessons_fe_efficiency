var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'dll'),
    publicPath: '/dll',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_dll',
      path: path.join(__dirname, 'dll' + '/[name]_manifest.json'),
    }),
  ],
}
