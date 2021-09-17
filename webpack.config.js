const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/', // https://medium.com/fredwong-it/react-router-v4-nested-routes-not-work-with-webpack-dev-server-50a2cf32e46e
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          path: 'https://fonts.googleapis.com',
          attributes: {

          },
        },
        'https://fonts.gstatic.com',
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',

      ],
      metas: [
        {
          path: 'width=device-width, initial-scale=1',
          attributes: {
            name: 'viewport',
          },
        },
        {
          path: 'Web site created using create-react-app',
          attributes: {
            name: 'description',
          },
        },
      ],
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
