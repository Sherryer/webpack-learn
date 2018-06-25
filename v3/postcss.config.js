module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        // require('postcss-px2rem')({remUnit: 23.4375 * 2})
        require('postcss-px2rem')({remUnit: 23.4375 * 2})
    ],
}