var employees = [
    {id:1,firstName:'Vivek',lastName:'sekhar',city:'hyderbad', phone:'9724232340', age:21,dob:'08-11-1998'},
    {id:2,firstName:'anitha',lastName:'ramesh',city:'bangalore', phone:'9724232345', age:40,dob:'08-11-1990'},
 ];
 
 var service = {}; //object
 
 service.getEmployees = () => {return employees;}
 service.addEmployee = (employee) => {
     employee.id = Date.now();
     employees.push(employee);
     return {msg:"employee added successfully", result:'ok'}
 }
 
 service.updateEmployee = (employee) => {
         let temp = employees.filter((item)=>(item.id == employee.id));
         if(temp.length >0){
                 temp[0].firstName = employee.firstName;
                 temp[0].lastName = employee.lastName;
                 temp[0].city = employee.city;
                 temp[0].phone = employee.phone;
                 temp[0].age = employee.age;
                 temp[0].dob = employee.dob;
         }
         return {msg:"employee update successfully", result:'ok'}
        }
 
 service.getEmployeeById = (id) => {
     let temp = employees.filter((item)=>(item.id == id));
         if(temp.length >0){
             return temp[0];
         }else{
              return {};
         }
 }
 
 service.deleteEmployee = (employee) => {
     employees = employees.filter((item)=>(item.id != employee.id));
     return {msg:"employee deleted successfully", result:'ok'}
 }
 

//  service.searchCustomer = function(field,text){
// 	var tempList = [];
// 	for (var i = 0; i < customersList.length; i++) {
// 		if(customersList[i][field].toLowerCase().startsWith(text.toLowerCase())){
// 			 tempList.push(customersList[i]);
// 		}
// 	}
// 	return tempList;
// }
 module.exports = service; // export lib
 