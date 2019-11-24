module.exports = {
  entry: __dirname + "/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          exclude: /node_modules/
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  }
};