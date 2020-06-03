var http = require('http');
var url = require('url');
var fs = require('fs');
var message = JSON.parse('{"id":1,"text":"started server","data":""}')
//
log(message.text);
//
http.createServer(function (req, res) {
    log('started to handle request!');
    //
    if (req.url.includes('html')) {
      handleFileRequest(req,res);
    }
    else{
      message.text = 'Hello!'    
      const accpetHeader = req.headers['accept'];
      if(accpetHeader && accpetHeader.includes('json'))  {
        res.writeHead(200, {'Content-Type': 'application/json'});
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
      }
      res.end(JSON.stringify(message));
    }
    //
    log('finished to handle request');
  }).listen(8080);
//
message.text ='closed server';
log(message.text);
//
function handleFileRequest(req,res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}
//
function log(message){
    console.log(new Date().toLocaleTimeString() + ':' + message);
}