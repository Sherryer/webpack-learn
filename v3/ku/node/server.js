
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/post', function (req, res) {
    var z = req.body;
    console.log(z);
    res.send('Hello world!');
});


app.get("/hello", function(req, res) {
    console.log(req.params)
    res.send("Hello");
});


app.listen(8080);
