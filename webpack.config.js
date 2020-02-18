const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "public/index.html"),
  filename: "index.html"
});

const buildDirectory = "build";

module.exports = {
  entry: __dirname + "/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, buildDirectory),
  },
  devServer: {
    contentBase: path.join(__dirname, buildDirectory),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [HTMLWebpackPluginConfig]
};