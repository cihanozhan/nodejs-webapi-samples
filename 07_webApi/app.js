var express = require('express')
var app = express()

app.set('view engine', 'ejs')       // uygulamanın görüntüleme motoru ejs olarak tanımlanır
// app.set('views', __dirname + '/views')  // views klasörünü uygulamaya tanımlar

app.locals.pagetitle = "Awesome Website";

app.get('/', function(req, res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ali', 'Veli', 'Hakkı']
    });
});

app.get('/about', function(req, res){
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
});

app.get('*', function(req, res){  
    res.send('Bad Request');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});