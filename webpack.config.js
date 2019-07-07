const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './examples/index.jsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html'),
      filename: path.join(__dirname, 'docs', 'index.html'),
      inject: 'head'
    })
  ],
  optimization: {
    splitChunks: { chunks: 'all' }
  }
};
