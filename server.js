var http = require('http');

var server = http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type" : "text/html"});  //Status code in header and MIME type
    response.write("Hello this is the text.\n <p>Due to Content-Type now, I am able to show this <strong>HTML</strong> text. </p>");
    response.end("This is the end.");
  });
server.listen(8080);  //listen to connection on this port
