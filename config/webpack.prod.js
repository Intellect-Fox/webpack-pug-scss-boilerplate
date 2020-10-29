const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfigBase = require('./webpack.common');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|svg|jp?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[hash].[ext]',
          publicPath: '/',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
  ],
});
