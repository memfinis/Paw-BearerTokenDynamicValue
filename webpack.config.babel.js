import webpack from 'webpack';
import path from 'path';

const name = 'BearerTokenDynamicValue';

const production = process.env.NODE_ENV === 'production';

const config = {
  target: 'node-webkit',
  entry: [
    './src/BearerTokenDynamicValue.js'
  ],
  output:{
    path: path.join(__dirname, './build/com.memfinis.PawExtensions.BearerTokenDynamicValue'),
    pathinfo: true,
    publicPath: '/build/',
    filename: name + '.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
