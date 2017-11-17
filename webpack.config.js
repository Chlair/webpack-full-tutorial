const optimize = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['jquery']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 35000,
            },
          },
          'image-webpack-loader'
        ] 
      }
    ],
  },

  plugins: [
    new optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }) 
  ],
};
