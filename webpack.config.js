/** @format */

module.exports = {
  mode: "development",
  entry: {
    mainPage: "./src/js/main.js",
    pluginsPage: "./src/js/plugins.js",
  },
  output: {
    filename: "[name].js",
    publicPath: "dist/js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
