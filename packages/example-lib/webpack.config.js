const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const devMode = process.env.NODE_ENV === 'development';

const config = {
  devtool: devMode ? 'inline-source-map' : undefined,
  mode: devMode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './lib'),
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          extends: path.resolve(__dirname, '.babelrc'),
        },
      },
      {
        test: /\.css$/,
        use: [
          'iso-morphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              url: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = config;
