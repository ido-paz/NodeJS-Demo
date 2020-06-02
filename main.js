var http = require('http');
var message = JSON.parse('{"id":1,"text":"started server"}')
//
log(message.text);
//
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello!');
  }).listen(8080);
//
message.text ='closed server';
log(message.text);
//
function log(message){
    console.log(new Date().getDate() + ':' + message);
}