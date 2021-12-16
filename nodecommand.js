var fs = require('fs'); // file system 
console.log("Hello world ...");

var commands = { // object
	'pwd': function () {
		console.log(process.cwd());
	},
	'sum': function (args) { // [ '2', '3' ]
		console.log("sum is " +( (parseInt(args[0])) + (parseInt(args[1])) ));
	},
    'add':function(args)
    {
        var total=0;
        for(let i=0;i<args.length;i++)
        {
            let currentNumber=parseInt(args[i]);
          if(!isNaN(currentNumber))
        {
            total=total+currentNumber;
        }        }
        console.log("addition"+total);
    }
};

process.stdin.on('data', function (input) {
	var matches = input.toString().match(/(\w+)(.*)/); // multiple word 
	var command = matches[1].toLowerCase();
	var args = matches[2].trim().split(/\s+/);
	try{
		//aObj.name
		//aObj["name"]
		commands[command](args);	
	}catch(e){
		console.log("Error:"+e);
	}
})