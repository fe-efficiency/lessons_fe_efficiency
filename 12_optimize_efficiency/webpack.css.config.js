const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  entry: {
    'example-css-mini': './src/example-css.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      // new OptimizeCSSAssetsPlugin({
      //   cssProcessorOptions: {
      //     map: true,
      //   },
      // }),
      new CssMinimizerPlugin({
        cache: false,
        // parallel: 1,
        sourceMap: true,
      }),
      // new OptimizeCssnanoPlugin({
      //   sourceMap: true,
      // }),
    ],
  },
})
