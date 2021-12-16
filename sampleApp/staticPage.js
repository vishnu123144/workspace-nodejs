var http = require('http');
var fs = require('fs');

var reqCount = 0; 

//req received from client/browser
// res sent to client/ browser

var server = http.createServer(function (req, res) { // req 

	fs.readFile('hello.html', 
		function (err, data) {
		if (!err) {
			res.statusCode = 200;
			res.write(data.toString());
			res.end();
		}else{
			res.statusCode = 404;
			res.write('Unable to ready file');
			res.end();
		}
	}
	);


});

server.listen(3000)