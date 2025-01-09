
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //the server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  //html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  //style loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
