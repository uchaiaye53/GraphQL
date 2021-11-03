var http = require('http');

var server = http.createServer(function(req,res){
    console.log('reqst was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var student ={
        name: 'mita',
        dept: 'CSE',
        red: 2017831077,
        age: 23
    };
    res.end(JSON.stringify(student));
});

server.listen(3000, '127.0.0.1');

console.log("we are in port no 3000");