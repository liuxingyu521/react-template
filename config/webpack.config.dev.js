const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const projectPaths = require('./paths')

module.exports = webpackMerge.smart(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: projectPaths.appDist,
  }
})