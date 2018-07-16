const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const px2rem = require('postcss-px2rem')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
          test: /\.txt/,
          use: [
              {
                  loader: path.resolve(__dirname, 'loader/01loader.js')
              }
          ],
          exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                  remUnit: 75
              }
            }
          ]
        })
      }
    ]
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM'
  },
  plugins: [
    new ExtractTextPlugin('src/style.css')
  ]
}
