const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    drum_machine: './drum_machine_entry_point.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  }
};
