const basicCssLoaders = ['style-loader', 'css-loader']

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: false
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          ...basicCssLoaders,
          'resolve-url-loader', //去掉该loader将导致构建时解析url路径错误
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true //启用resolve-url-loader所需
            }
          }]
      },
      {
        test:  /\.less$/,
        use: [
          ...basicCssLoaders,
          'less-loader'
        ]
      },
      {
        test:  /\.styl(us)?$/,
        use: [
          ...basicCssLoaders,
          //下面的配置等同于'stylus-loader?resolve url'
          {
            loader: 'stylus-loader',
            options: {
              'resolve url': true
            }
          }
        ]
      },
      {
        test: /\.gif$/,
        use: 'file-loader'
      }
    ]
  }
}