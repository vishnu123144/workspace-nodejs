let service = {};
// REST API's
let customers = [
    {id:1,name:'Vivek', email:'vivek@pyther.com', phone:"565656565", address:'India'},
    {id:2,name:'Rama', email:'rama@pyther.com', phone:"565656565", address:'India'},
    {id:3,name:'Kavita', email:'kavita@pyther.com', phone:"565656565", address:'India'},
    {id:4,name:'Krishna', email:'vivek@pyther.com', phone:"565656565", address:'India'},
    {id:5,name:'Rahim', email:'vivek@pyther.com', phone:"565656565", address:'India'},
];
service.addCustomer = (customer) =>{
    customers.push(customer);
};
service.getCustomer = () =>{
    return customers;
}
service.getCustomerById = (id) =>{
    for (var i = 0; i < customers.length; i++) {
        if(customers[i].id == id){
            return customers[i];
        }
    }
    return {};
}

service.updateCustomer = (customer) =>{
    for(var i = 0; i < customers.length; i++){
        if(customers[i].id == customer.id){
            customers[i] = customer;
            break; 
        }
    }
}
service.deleteCustomer = (customer) =>{
    let temp = [];
    for(var i = 0; i < customers.length; i++){
        if(customers[i].id != customer.id){
            temp.push(customers[i]);
        }
    }
    customers = temp;
}

module.exports = service;