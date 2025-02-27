const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.join(__dirname, "src/index.tsx"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: path.resolve(__dirname, "public/logo.png"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: { icon: true },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
    clean: true,
  },
};
