exports.index = function(req, res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ali', 'Veli', 'Hakkı']
    });
}

exports.about = function(req, res){
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
}