module.exports = {
  entry: './src/index1.js',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}