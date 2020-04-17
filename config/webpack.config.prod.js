const webpackBaseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.smart(webpackBaseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 60 * 1000, // 生成块的最小字节
    },
  },
})
