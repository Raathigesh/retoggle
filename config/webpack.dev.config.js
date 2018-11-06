const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = env => ({
  entry: "./src/example/index.tsx",
  mode: env.production ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "ui.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    port: 9000
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "InspectHooks",
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "root"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
