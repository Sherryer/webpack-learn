module.exports = {
    entry: {
        case: './cases/index.js'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'js/[name].js',
        publicPath: ''
    },
    mode: 'development'
}
