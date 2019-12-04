let {smart} = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

let base = require('./webpack.base')

let devMode = false

module.exports = smart(base(false), {
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                common: {
                    minSize: 0,
                    minChunks: 2,
                    chunks: 'initial'
                },
                vendor: {
                    priority: 10,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 2,
                    chunks: 'initial'
                }
            }
        }
    },
})
