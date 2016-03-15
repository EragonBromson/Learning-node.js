var express = require('express');
var favicon = require('serve-favicon');

var app = express();
//To use a piece of middleware we need to call app.use()
app.use(express.static(__dirname + '/public'))  // Specifies that the /public folder includes static files
.use(favicon(__dirname + '/public/favicon.ico'))
.use(function(request, response){
  response.send('Hello');
});

app.listen(8080);
