// const webpack = require("webpack");
// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  // target: "web",
  devtool: "source-map",
  // entry: "./src/index",
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   publicPath: "/",
  //   filename: "bundle.js",
  // },
  devServer: {
    static: "./dist",
    // liveReload: true,
    // historyApiFallback: true,
    // headers: { "Access-Control-Allow-Origin": "*" },
    // https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
