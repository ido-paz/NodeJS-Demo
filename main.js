var http = require('http');
var message = JSON.parse('{"id":1,"text":"started server","data":""}')
//
log(message.text);
//
http.createServer(function (req, res) {
    log('request arrived!');
    message.text = 'Hello!'    
    const accpetHeader = req.headers['accept'];
    if(accpetHeader && accpetHeader.includes('json'))  {
      res.writeHead(200, {'Content-Type': 'application/json'});
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'});
    }
    res.end(JSON.stringify(message));
  }).listen(8080);
//
message.text ='closed server';
log(message.text);
//
function log(message){
    console.log(new Date().toLocaleTimeString() + ':' + message);
}