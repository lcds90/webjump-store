const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/', // https://medium.com/fredwong-it/react-router-v4-nested-routes-not-work-with-webpack-dev-server-50a2cf32e46e
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      meta: { viewport: 'width=device-width, initial-scale=1.0, user-scalable=no' },
    }),
    new MiniCssExtractPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
      emitErrors: true, // by default this is to true to check the CSS lint errors
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: false,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },

            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
