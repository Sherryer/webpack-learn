const path = require('path');

const buildFileName = 'dist';

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: 'umd',
    },
    // mode: 'production',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',                                              // 转化 es6 到 es5 的插件集合，不支持 es7 等其他项，class 装饰器等 需要单独配置
                                '@babel/preset-react',
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', {'legacy': true}],          // 支持 decorator
                                ['@babel/plugin-proposal-class-properties', {'loose': true}]     // 支持 class
                            ]
                        }
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.worker\.js$/,
                use: [
                    {
                        loader: 'worker-loader',
                        options: {
                            inline: 'no-fallback',
                        }
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    }
                ]
            }
        ]
    },
};
