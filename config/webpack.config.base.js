const path = require('path')
const projectPaths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

// 当前环境
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

// 从 process.env 环境里取 bundleAnalyzer 设置
const Use_BundleAnalyzer = process.env.USE_BUNDLE_ANALYZER

module.exports = {
  entry: {
    index: path.join(projectPaths.appSrc, 'index.tsx'),
  },
  output: {
    path: projectPaths.appDist,
    filename: `[name].[chunkhash:8].${isProd ? 'min.' : ''}js`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(projectPaths.appViews, 'index.html'),
      favicon: path.join(projectPaths.public, 'favicon.ico'),
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(projectPaths.public, 'favicon.ico'),
        to: path.join(projectPaths.appDist, 'favicon.ico'),
      },
    ]),
    // 分析打包后的包大小
    Use_BundleAnalyzer && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
  },
}
