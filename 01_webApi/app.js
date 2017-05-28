var http = require('http');

var myServer = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    // response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<b>Hello</b> World");   // bold text/html ile çalışır!
    response.end();
});

myServer.listen(3000);

console.log("Yayın Adresi : http://localhost:3000");
