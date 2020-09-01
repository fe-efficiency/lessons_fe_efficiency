const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
var TSCheckerPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(common, {
  entry: {
    'example-ts': './src/example-ts.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // use: {
        //   loader: 'ts-loader',
        //   options: {
        //     transpileOnly: true,
        //   },
        // },
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    // new TSCheckerPlugin({
    //   typescript: {
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: true,
    //     },
    //   },
    // }),
  ],
})
