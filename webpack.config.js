var webpack = require('webpack');

module.exports = {
  entry: [
    './client/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: "eval",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};