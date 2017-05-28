var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');       // uygulamanın görüntüleme motoru ejs olarak tanımlanır
app.set('views', __dirname + '/views');  // views klasörünü uygulamaya tanımlar

app.locals.pagetitle = "Website";

app.get("/", routes.index);
app.get("/about", routes.about);

app.get('*', function(req, res){  
    res.send('Bad Request');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});