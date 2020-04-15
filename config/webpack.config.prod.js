const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
})