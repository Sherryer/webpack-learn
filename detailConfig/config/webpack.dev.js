let { smart } = require('webpack-merge')

let base  = require('./webpack.base')

module.exports = smart(base(true), {

})
