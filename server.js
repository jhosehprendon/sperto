var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
 
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);