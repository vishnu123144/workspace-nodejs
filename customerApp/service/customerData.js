var customers = [
    {id:1,name:'Vivek',email:'vivek.singhwal@gmail.com', phone:'9724232340', address:'India'},
    {id:2,name:'Rama',email:'rama@gmail.com', phone:'36536536', address:'India'},
 ];
 
 var service = {}; //object
 
 service.getCustomers = () => {return customers;}
 service.addCustomer = (customer) => {
     customer.id = Date.now();
     customers.push(customer);
     return {msg:"customer added successfully", result:'ok'}
 }
 
 service.updateCustomer = (customer) => {
         let temp = customers.filter((item)=>(item.id == customer.id));
         if(temp.length >0){
                 temp[0].name = customer.name;
                 temp[0].email = customer.email;
                 temp[0].phone = customer.phone;
                 temp[0].address = customer.address;
         }
         return {msg:"customer updated successfully", result:'ok'}
         
 }
 
 service.getCustomerById = (id) => {
     let temp = customers.filter((item)=>(item.id == id));
         if(temp.length >0){
             return temp[0];
         }else{
              return {};
         }
 }
 
 service.deleteCustomer = (customer) => {
     customers = customers.filter((item)=>(item.id != customer.id));
     return {msg:"customer deleted successfully", result:'ok'}
 }
 
 module.exports = service; // export lib
 