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
<<<<<<< HEAD
=======
// var express = require('express');
// // var morgan = require('morgan'); // loads the piece of middleware for logging
// var favicon = require('serve-favicon'); // loads the piece of middleware for the favicon
//
// var app = express();
//
// app.use(express.static(__dirname + '/public')) // Specifies that the /public folder includes static files (basic piece of middleware loaded)
// .use(favicon(__dirname + '/public/favicon.ico')) // Activates the favicon specified
// .use(function(req, res){ // finally answers
//     res.send('Hello');
// });
//
// app.listen(8080);
>>>>>>> c8d8612169671d51d5d8c115f236ef1e93f56947
