const webpack = require('webpack')
const path = require('path')
const MODE = 'development'


module.exports = {
  mode: MODE,
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
  },
};