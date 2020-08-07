var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  // devtool: false,
  // plugins: [
  //   new webpack.EvalSourceMapDevToolPlugin({
  //     exclude: /node_modules/,
  //     module: true,
  //     columns: false
  //   })
  // ],
  devServer: {
    contentBase: 'dist',
    open: true
  },
  output: {
    filename: "source-map.main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}