const merge = require("webpack-merge");

const baseConfig = require("./webpack.electron.dev.config");

module.exports = merge.smart(baseConfig, {
  mode: "production"
});
