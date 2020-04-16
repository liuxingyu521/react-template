const path = require('path')
const projectPaths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(projectPaths.appSrc, 'index.tsx'),
  output: {
    path: projectPaths.appDist,
    filename: 'bundle.js',
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
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
  },
}
