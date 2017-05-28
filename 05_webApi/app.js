var express = require('express')
var app = express()

app.set('view engine', 'ejs')       // uygulamanın görüntüleme motoru ejs olarak tanımlanır
app.set('views', __dirname + '/views')  // views klasörünü uygulamaya tanımlar

app.get('/', function(req, res){
    res.render('default', {
        title: 'Home',
        users: ['Ali', 'Veli', 'Hakkı']
    });
});

// .../myPage
app.get('/myPage', function(req, res){
    res.send('@cihanozhan');
});

// .../user/cihan
app.get('/user/:name?', function(req, res){
    var name = req.params.name;
    res.send('Merhaba ' + name);
});

// .../user/cihan/başlıkDemo
app.get('/user/:name?/:title?', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>ad: ' + name + '<br>başlık: ' + title + '</p>');
});

// yukarıda tanımlanan routing'ler haricindeki herhangi bir çağrı bu metod tarafından yakalanacaktır.
app.get('*', function(req, res){  
    res.send('Geçersiz İstek');
});

var server = app.listen(3000, function() {
    console.log('Yayın portu : 3000');
});