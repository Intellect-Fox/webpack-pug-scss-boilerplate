const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.common');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    watchFiles: {
      paths: [path.resolve(__dirname, '../src/**/*.*')],
      options: {
        usePolling: true,
      },
    },
  },
});
