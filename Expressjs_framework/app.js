var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.write("You are on the root page.");
  response.end();
});

app.get('/floor/:floornum/bedroom', function(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('You are in the bedroom on floor number ' + request.params.floornum);
});

//FOR ALL THE PAGES THAT DONT EXIST THIS PIECE OF CODE IS REQUIRED
app.use(function(request, response, next){
  response.setHeader('Content-Type', 'text/plain');
  response.send(404,"Page not found.");
});

app.listen(8080);
