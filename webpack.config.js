
'use strict';

const webpack = require('webpack');

module.exports = {

  entry: './client/chat.jsx',
  output: {
    path: __dirname + '/client',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Chat'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'socket.io-client': 'socket.io-client',
    'react-bootstrap': 'react-bootstrap'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }

}
