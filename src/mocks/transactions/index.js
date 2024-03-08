var http = require('http');
var result = require('./payload.json');
var port = 8080;

var server = http.createServer(function(req, res) {
	
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.url === '/api/getbalance') {
        if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
            return;
        }

        var random = Math.random();
        if (random  >= 0.8) {
            res.writeHead(503);
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(result, 0, 4));
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port, function(){
    console.log("Server is listening on: http://localhost:%s", port);
});