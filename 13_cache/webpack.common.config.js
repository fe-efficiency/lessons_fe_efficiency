var WebpackTimingPlugin = require('./WebpackTimingPlugin')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [new WebpackTimingPlugin()],
}
