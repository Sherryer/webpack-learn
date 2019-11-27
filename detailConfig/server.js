
const express = require('express')
const middle = require('webpack-dev-middleware')
const webpack = require('webpack');
const config = require('./webpack.config')
const app = express()

const compiler = webpack(config);

app.use(middle(compiler))

app.listen(8096)