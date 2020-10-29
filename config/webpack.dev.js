const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.common');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devServer: {
    port: 8888,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jp?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[hash].[ext]',
          publicPath: '../',
        },
      },
    ],
  },
});
