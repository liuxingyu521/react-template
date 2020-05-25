const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.smart(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map', // 生成带有行列信息的 map 文件
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 60 * 1000, // 生成块的最小字节
    },
  },
})
