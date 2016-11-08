var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  module : {
    loaders : [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: '../public/js',
    filename: 'bundle.js'
  }
}
