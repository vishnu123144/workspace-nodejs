var http = require('http');
var reqCount = 0; 
var server = http.createServer(function (req, res) {
	console.log(">> new request received:"+req.url + " count:"+reqCount++);
	res.statusCode = 200;
	res.write('Hello World! count :'+reqCount);
	res.end();
});
server.listen(3000);
