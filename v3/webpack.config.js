const webpack = require('webpack');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackManifestPlugin = require("webpack-manifest-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') //tree shacking 删除无用代码
// const postcss = require('postcss')
// const px2rem = require('postcss-px2rem');

module.exports = {
    entry: {
        boundle: './src/app.jsx',
        ceshi : './src/ceshi.jsx'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js',
        publicPath: ''
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true
    },
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
                ],
                exclude: /node_modules/
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
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
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
            },
            {
                test: /(\.yaml$)/,
                use: ['json-loader', 'yaml-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new webpackManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            // { from: "test/a/a.txt", to: "test/b/b.txt" },
            // { from: "test/a/a.txt", to: "test/c/c.txt" },
        ]),
        new webpack.LoaderOptionsPlugin({
            // options: {
            //     postcss: function() {
            //         return [px2rem({remUnit: 75})];
            //     },
            // }
        })
    ]

};