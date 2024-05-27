const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const {VanillaExtractPlugin} = require('@vanilla-extract/webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify"),
      "crypto": require.resolve("crypto-browserify"),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new VanillaExtractPlugin({
      exclude: /\.vanilla\.css$/i
    })
  ],
  module: {
    rules: [
      {
        test: [/\.css$/, /\.vanilla\.css$/i],
        use: ["style-loader", "css-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              url: false
            }
          }
        ]
      },
    ],
  },
}
