const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    styles: path.resolve(__dirname, '../src/styles/index.scss'),
    index: path.resolve(__dirname, '../src/pug/pages/index.pug'),
    app: path.resolve(__dirname, '../src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "scripts/bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jp?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/pug/pages/index.pug'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
  ],
};
