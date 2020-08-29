var webpack = require('webpack')
var config = require('./webpack.config')

webpack(config, (err, stats) => {
  console.log('finish')
})
