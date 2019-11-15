const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')                 // 用于替换style-loader把style-loader插入html页面的css通过link标签引入
const TerserJSPlugin = require('terser-webpack-plugin')                         // 替换 uglifyjs-webpack-plugin 解决 uglifyjs 不支持es6语法问题
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')   // css 压缩
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')

console.log(process.env.NODE_ENV)

// const devMode = process.env.NODE_ENV !== 'production';
const devMode = true;

const buildFileName = 'dist'

module.exports = {
    entry: {
        boundle: './src/index.js',
    },
    output: {
        path: `${__dirname}/${buildFileName}/`,
        filename: '[name].[hash:20].js',    // 哈希 20 位
        publicPath: ''
    },
    mode: devMode ? 'development': 'production', // 'development' or 'production'
    devServer: {                                // 开发服务器的配置
        port: 3000,                             // 端口
        progress: true,                         // 进度条
        open: true,                             // 自动打开浏览器
        // compress: true,                      // 压缩
        contentBase: `./${buildFileName}`       // 将 dist 作为服务静态资源的 base 路径
    },
    optimization: {                             // mode 为 production 时才会走这里的配置
        minimizer: [ new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({}) ],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['eslint-loader'],
                enforce: 'pre',                                                 // 让这个 loader 在其他 loader 之前执行
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,                    // 把 css 提成标签插入到 html
                        options: {
                            hmr: devMode,
                        },
                    },
                    // 'style-loader',                                          // 把 css 插入 html 页面
                    'css-loader',                                               // 支持 @import
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(js|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'                                 // 转化 es6 到 es5 的插件集合，不支持 es7 等其他项，class 装饰器等 需要单独配置
                            ],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],          // 支持 decorator
                                ["@babel/plugin-proposal-class-properties", { "loose" : true }]     // 支持 class
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
        ]
    },


    externals: {
        // react: 'React',
        // 'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]      // 按顺序自动寻找 配置中后缀的文件
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './template/index.html',  // 模版路径
            filename: `index.html`,             // 模版名字 文件输出路径是 output.path
            // hash: true,                      // 为引入的文件路径后加上哈希 src=boundle.js?ddf358468a5d13c47a7e
            minify: {
                removeAttributeQuotes: true,    // 移除双引号
                collapseWhitespace: true,       // 移除空行
            }
        }),

        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
}