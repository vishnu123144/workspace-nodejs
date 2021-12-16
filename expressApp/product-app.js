var express = require('express'); //express import

var app = express(); // creating
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var employees = [
   {id:1,firstName:"vishnu",lastName:"vardan",city:"hyderabad",phone:8997329072,age:21,dob:"18-06-1999"},
   {id:2,firstname:'Rama',lastName:"chandra",city:"bangalore", phone:'9879826222', age:30,dob:"19-08-2020"},
];

app.get('/api/employee', function (req, res) { // route /
        res.send(employees);
});

app.post('/api/employee', function (req, res) { // route /
        //add customer
       // req.body.id = Date.now();
        employees.push(req.body); //add to array 
        res.send({msg:"employee added successfully", result:'ok'});
});

app.put('/api/employee', function (req, res) { // route /
        let employee = req.body;
        let temp = employees.filter((item)=>(item.id == employee.id));
        if(temp.length >0){
                temp[0].firstName = employee.firstName;
                temp[0].lastname = employee.lastName;
                temp[0].phone = employee.phone;
                temp[0].city = employee.city;
                temp[0].age = employee.age;
                temp[0].dob = employee.dob;
        }

        res.send({msg:"employee updated successfully", result:'ok'});
});

app.delete('/api/employee', function (req, res) { // route /
        // add logic to delete
        employees = employees.filter((item)=>(item.id != req.body.id));
        res.send({msg:"employee deleted successfully", result:'ok'});
});

app.get('/api/employee/:id', function (req, res) { // route /
        //get customer with id = id
        const existEmployee=employees.find((employee)=>
        employee.id===parseInt(req.params.id));
        if(!existEmployee) return res.status(404).send("employee not found");
       res.status(200).send(existEmployee);
});

var server = app.listen(3000, function () { //listen to port 3000
        console.log('Express app listening at http://localhost:3000');
});