var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request,response) {

    var page = url.parse(request.url).pathname;
    console.log(page);
    var parameters = querystring.parse(url.parse(request.url).query);

    // response.writeHead(200, {"Content-Type" : "text/html"});  //Status code in header and MIME type
    if(page == '/'){
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.write("Hello this is the text.\n"+
      "<p>Due to Content-Type now, I am able to show this <strong>HTML</strong> text. </p>");
    }
    else if (page == '/mypage') {
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.write("<p> This is my page. </p>");
    }
    else {
      response.writeHead(404);  //No Content-Type with error code
      response.write("<p> <strong>Error</strong> </p>");
    }
    if('firstname' in parameters && 'secondname' in parameters && response.statusCode != '404'){
      response.write( "parameters are : \nfirstname = " + parameters['firstname']+
      "\nsecondname = " + parameters['secondname'] + '\n');

    }
    response.write("\n");
    response.end("\nThis is the end.");
  });
server.listen(8080);  //listen to connection on this port

var callbackfunction = function(){
  console.log("Goodbye.");
};

server.on('close', callbackfunction);
server.close();
