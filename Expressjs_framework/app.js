var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.write("You are on the root page. :P");
  response.end();
});

//FOR ALL THE PAGES THAT DONT EXIST THIS PIECE OF CODE IS REQUIRED
app.use(function(request, response, next){
  response.setHeader('Content-Type', 'text/plain');
  response.send(400,"Page not found.");
});

app.listen(8080);
