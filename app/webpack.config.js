var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  module : {
    loaders : [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: 'handlebars-loader'
      }
    ]
  },
  output: {
    path: '../public/js',
    filename: 'bundle.js'
  }
}
