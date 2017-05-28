var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('<h1>Hello</h1> Express');
});

var server = app.listen(3000, function() {
    console.log('Yayın Adresi : http://localhost:3000');
});
