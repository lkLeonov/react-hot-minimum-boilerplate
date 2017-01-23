var path = require('path');
// var webpack = require('webpack');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }]
  }
};
