module.exports = {
  entry: {
    'mock-demos': './src/mockjs-demos.jsx',
  },
  devServer: {
    contentBase: 'dist',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
}
