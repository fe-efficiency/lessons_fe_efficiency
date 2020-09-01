var WebpackTimingPlugin = require('./WebpackTimingPlugin')
var TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [new WebpackTimingPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
      }),
    ],
  },
}
