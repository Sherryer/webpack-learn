const HtmlWebpackPlugin = require('html-webpack-plugin')                        // 插入 js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')                 // 用于替换style-loader把style-loader插入html页面的css通过link标签引入
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const buildFileName = 'dist'
const cdnPath = ''


module.exports = (devMode) => ({
    entry: {
        boundle: './src/index.js',
        newlearn: './newlearn/index.js',
        ceshi: './ceshi/src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, `../${buildFileName}/'`),
        filename: 'js/[name].[hash:20].js',         // 哈希 20 位
        publicPath: devMode ? '' : cdnPath
    },
    mode: devMode ? 'development' : 'production',    // 'development' or 'production'
    devtool: 'eval-source-map',
    devServer: {                                    // 开发服务器的配置
        port: 4000,                                 // 端口
        progress: true,                             // 进度条
        open: true,                                 // 自动打开浏览器
        // compress: true,                          // 压缩
        contentBase: `./${buildFileName}`,          // 将 dist 作为服务静态资源的 base 路径,

        proxy: {                                    // 代理配置
            '/api': {
                target: 'http://localhost:3000',    // 访问带 /api 的接口全部转发到 http://localhost:3000
                pathRewrite: {'/api': ''}         // 将请求中 /api 替换为  ''
            }
        },

        before(app) {                               // 启动前的钩子方法 用于 mock 简单数据
            // app 就是 const app = express() 这个 app
            // app.get('/xxx', (req, res) => {
            //     res.json({data: 1})
            // })
        }
    },
    // resolveLoader: {
    //     modules: ['node_modules', path.resolve(__dirname, 'loaders')]               // 加载 loader 时候按照 node_modules 找不到，去 loaders 里找
    // },

    module: {
        // noParse: /jquery/,                                                      // 配置某些包没有依赖其他模块，无需解析，增加开发环境编译速度
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
                    {
                        loader: 'css-loader',
                        options: {
                            modules: devMode ? {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-custom-hash',
                            } : true,
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',                                                // 转化 es6 到 es5 的插件集合，不支持 es7 等其他项，class 装饰器等 需要单独配置
                                '@babel/preset-react'
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', {'legacy': true}],          // 支持 decorator
                                ['@babel/plugin-proposal-class-properties', {'loose': true}]     // 支持 class
                            ]
                        }
                    },
                    // 'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        outputPath: 'img/',
                        // publicPath: ''               // 图片的 cdn Path
                    }
                }]
            },
        ]
    },

    externals: {
        // react: 'React',
        // 'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],           // 按顺序自动寻找 配置中后缀的文件
        // alias: {},
        // mainFields: [],                               // 引用第三方库时，查询的入口文件搜索顺序
    },

    plugins: [
        new CleanWebpackPlugin(),                       // 定义变量
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        }),
        new webpack.IgnorePlugin({         // IgnorePlugin  忽略模块中的引用，使打包体积变小
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new HtmlWebpackPlugin({
            template: './template/index.html',          // 模版路径
            filename: `index.html`,                     // 模版名字 文件输出路径是 output.path
            // hash: true,                              // 为引入的文件路径后加上哈希 src=boundle.js?ddf358468a5d13c47a7e
            minify: {
                removeAttributeQuotes: true,            // 移除双引号
                collapseWhitespace: true,               // 移除空行
            },
            chunks: ['boundle', 'common', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: './template/newlearn.html',
            filename: `newlearn.html`,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            chunks: ['newlearn', 'common', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: './template/ceshi.html',
            filename: `ceshi.html`,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            chunks: ['ceshi', 'vendor']
        }),

        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
    ],
})

