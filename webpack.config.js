// const webpack = require("webpack");
// const path = require("path");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  // target: "web",
  devtool: "source-map",
  entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   publicPath: "/",
  //   filename: "bundle.js",
  // },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    static: "./dist",
    hot: true,
    // liveReload: true,
    // historyApiFallback: true,
    // headers: { "Access-Control-Allow-Origin": "*" },
    // https: false,
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "host",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     // Simulator:
    //     //   "simulator@https://finplanaap-simulator.vercel.app/remoteEntry.js",
    //   },
    //   exposes: {},
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: deps["react-dom"],
    //     },
    //   },
    // }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
