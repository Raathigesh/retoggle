const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = env => ({
  entry: "./src/lib/index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    sourceMapFilename: "[file].map",
    library: "storyhooks",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  },

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
