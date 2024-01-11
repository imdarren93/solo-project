const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, './client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
    module: {
        rules: [
          {
            // test: /\.(?:js|jsx)$/,
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }], 
                  ['@babel/preset-react', {targets: "defaults"}]
                ]
              }
            }
          }, 
          {
            test: /\.(css|scss)$/,
            // test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
            use: [
              {
                // loads files as base64 encoded data url if image file is less than set limit
                loader: 'url-loader',
                options: {
                  // if file is greater than the limit (bytes), file-loader is used as fallback
                  limit: 8192,
                },
              },
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './client/index.html',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'build'),
          publicPath: '/'
        },
        proxy: {
          '/home' : 'http://localhost:3000',
          '/movies' : 'http://localhost:3000',
          '/tvshows' : 'http://localhost:3000',
        },
        compress: true,
        port: 8080,
      },
}