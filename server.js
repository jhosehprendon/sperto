var sslRedirect = require('heroku-ssl-redirect');

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(sslRedirect());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var http = express.createServer();

http.get('*', function(req, res) {  
  res.redirect('https://' + req.headers.host + req.url);

  // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
  // res.redirect('https://example.com' + req.url);
})
app.listen(port);