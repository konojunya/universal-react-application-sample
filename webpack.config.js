const webpack = require("webpack");
const path = require("path");

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
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              happyPackMode: true
            }
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
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
