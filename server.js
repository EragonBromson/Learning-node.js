var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response) {

    var page = url.parse(request.url).pathname;
    console.log(page);

    // response.writeHead(200, {"Content-Type" : "text/html"});  //Status code in header and MIME type
    if(page == '/'){
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.write("Hello this is the text.\n <p>Due to Content-Type now, I am able to show this <strong>HTML</strong> text. </p>");
    }
    else if (page == '/mypage') {
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.write("<p> This is my page. </p>");
    }
    else {
      response.writeHead(404);  //No Content-Type with error code
      response.write("<p> <strong>Error</strong> </p>");
    }
    response.end("This is the end.");
  });
server.listen(8080);  //listen to connection on this port
