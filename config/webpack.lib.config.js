const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = env => ({
  entry: "./src/lib/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "lib.js",
    library: "storyhooks",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
});
