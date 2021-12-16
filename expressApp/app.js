var express = require('express'); //express import

var app = express(); // creating
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var customers = [
   {id:1,name:'Vivek',email:'vivek.singhwal@gmail.com', phone:'9724232340', address:'India'},
   {id:2,name:'Rama',email:'rama@gmail.com', phone:'36536536', address:'India'},
];

app.get('/', function (req, res) { // route /
        res.send('Hello World!');
});

app.get('/app', function (req, res) { // route /
        res.send('Hello App!');
});

app.get('/api/customer', function (req, res) { // route /
        res.send(customers);
});

app.post('/api/customer', function (req, res) { // route /
        //add customer
       // req.body.id = Date.now();
        customers.push(req.body); //add to array 
        res.send({msg:"customer added successfully", result:'ok'});
});

app.put('/api/customer', function (req, res) { // route /
        let customer = req.body;
        let temp = customers.filter((item)=>(item.id == customer.id));
        if(temp.length >0){
                temp[0].name = customer.name;
                temp[0].email = customer.email;
                temp[0].phone = customer.phone;
                temp[0].address = customer.address;
        }

        res.send({msg:"customer updated successfully", result:'ok'});
});

app.delete('/api/customer', function (req, res) { // route /
        // add logic to delete
        customers = customers.filter((item)=>(item.id != req.body.id));
        res.send({msg:"customer deleted successfully", result:'ok'});
});

app.get('/api/customer/:id', function (req, res) { // route /
        //get customer with id = id
        console.log("requested id "+ req.paramas.id)
        res.send({msg:"customer added successfully", result:'ok'});
});

var server = app.listen(3000, function () { //listen to port 3000
        console.log('Express app listening at http://localhost:3000');
});