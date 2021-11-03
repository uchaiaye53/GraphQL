var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('reqst was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMePipe.txt', 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log("we are in port no 3000");