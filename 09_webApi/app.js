var http = require('http');
var request = require('request');
var browser = require("browser");

myServer.listen(3000);

// request.get('http://trademap.org/Index.aspx').auth('username', 'password', false);

var userdata = {
  email: "dijibil@gmail.com",
  pass : "....."
};

var $b = new browser();
$b.submit({
  from : 'https://accounts.google.com/Login',
  selector: "#gaia_loginform",
  data : {
    Email  : userdata.email,
    Passwd : userdata.pass
  }
});

// authenticated access
$b.browse('https://mail.google.com/mail/u/0/?ui=html&zy=d')
.after(); // browse after previously registered function

/* running on end of all browsings
 *   err: error object or null
 *   out: { result : result body, ...}
 */
$b.on("end", function(err, out) {
  console.log(out.url, out.result, out.responseHeaders);
});
