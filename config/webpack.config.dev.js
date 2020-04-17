const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const projectPaths = require('./paths')
const webpack = require('webpack')

module.exports = webpackMerge.smart(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: projectPaths.appDist,
    writeToDisk: true, // 将打包生成文件写到磁盘中，写入路径默认取 output.path
  },
})
