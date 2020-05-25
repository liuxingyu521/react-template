const path = require('path')
const projectPaths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { getLastCommitHash } = require('./util')
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
    filename: `js/[name].[chunkhash:8].${isProd ? 'min.' : ''}js`,
    /** 在引用的相对资源路径前增加前缀 */
    // publicPath: 'js/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 生成带有最后一次构建信息以及其他一些信息的banner
    new webpack.BannerPlugin(`
      - @auther Xuer<xuj_power@qq.com>
      - @fileInfo: ${getLastCommitHash()}
    `),
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
    // 拆分 css 文件
    new MiniCssExtractPlugin({
      filename: `css/[name].[chunkhash:8].${isProd ? 'min.' : ''}css`,
    }),
    // 显示 webpack 打包进度
    new WebpackBar(),
    // 分析打包后的包大小
    Use_BundleAnalyzer && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css', '*'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(projectPaths.appPath, 'tsconfig.json'),
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
  },
}
