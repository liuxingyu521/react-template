const path = require("path");
const projectPaths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(projectPaths.appSrc, "index.tsx"),
  output: {
    path: projectPaths.appDist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(projectPaths.appViews, "index.html"),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', ".ts", ".tsx", "*"],
  },
};
