
// console.log("Hello world 123");
// 3-4 lines

// aObj = {name:"Vivek" , stdin:{on:function(a,b){} }};

process.stdin.on('data', function (input) {
	console.log("Hello:1: "+ input.toString());
});
process.stdin.on('data', function (input) {
	console.log("Hello:1: "+ input.toString());
});
process.stdin.on('data', function (input) {
	if(input.toString().startsWith('exit'))
    {
        process.exit();
    }
});
