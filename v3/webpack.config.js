const webpack = require('webpack');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackManifestPlugin = require("webpack-manifest-plugin");


module.exports = {
    entry: {
        boundle: './src/app.jsx'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react', 'stage-0', 'es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /(\.jpg$)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'dist/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new webpackManifestPlugin()
    ]

};