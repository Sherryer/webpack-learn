const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const testPlugin = require('./ceshi/testPlugin')
const px2rem = require('postcss-px2rem')
const path = require('path')

module.exports = {
  entry: {
    main: ['./src/index.js']
  },
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
              loader: 'postcss-loader'
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
    new ExtractTextPlugin('src/style.css'),
    new BundleAnalyzerPlugin()
    // new testPlugin('hahha')
  ]
}
