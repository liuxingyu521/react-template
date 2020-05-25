const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const projectPaths = require('./paths')
const webpack = require('webpack')

module.exports = webpackMerge.smart(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map', // 打包速度较快，使用 eval 执行每个文件，生成内联 sourceMap
  devServer: {
    contentBase: projectPaths.appDist,
    writeToDisk: true, // 将打包生成文件写到磁盘中，写入路径默认取 output.path
    historyApiFallback: true, // 任何路径页面的请求都会默认到 index.html 上，使用 history API 跳转用的是同一个 html
    // compress: true, // 打开 Gzip 压缩
  },
})
