const webpack = require("webpack");
const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  entry: {
    app: path.resolve(__dirname, "./src/client.tsx")
  },
  devtool: IS_PRODUCTION ? false : "#source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
    publicPath: `/assets/`,
    chunkFilename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /build/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  stats: "minimal",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      },
      "process.title": JSON.stringify("browser")
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LoadablePlugin()
  ]
};
