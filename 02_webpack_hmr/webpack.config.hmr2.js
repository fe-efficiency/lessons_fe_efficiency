module.exports = {
  entry: './src/index2.js',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  }
}