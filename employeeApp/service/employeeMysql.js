var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Vishnu@139',
  database        : 'nodejs'
});
 
var service = {};

service.getEmployeesCallback = function(callback){
	pool.query('SELECT * from employee', function (error, results, fields) {
  	if (error) {
  		callback([]);
  		throw error;
  	}else{
  		callback(results);
  	}
	});
}

service.addEmployee = function(employee) {
       return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
          if(err) { console.log(err); resolve({result:"fail"}); return; }
            connection.query("INSERT INTO employee set ? ",employee, function(err, results) {
            if(err){
             console.log("Error Selecting : %s ",err );
             resolve({result:"fail"});
            }else{
             resolve({result:"success"});
           }
        });
      });
     });
};

service.updateEmployee = function(employee) {
       return new Promise((resolve, reject) => {
          pool.getConnection(function(err, connection) {
        if(err) { console.log(err); resolve({result:"fail"}); return; }
        connection.query("UPDATE employee set ? WHERE id = ? ",[employee,employee.id], function(err, results) {
            if(err){
             console.log("Error Selecting : %s ",err );
             resolve({result:"fail"});
            }else{
             resolve({result:"ok"});
           }
        });
      });
     });
};

service.deleteEmployee = function({id}) {
       return new Promise((resolve, reject) => {
          var sql = "delete FROM employee where id='"+id+"'";
          console.log("sql:"+sql);
          pool.getConnection(function(err, connection) {
            if(err) { console.log(err); resolve({result:"ok"});}
            // make the query
            connection.query(sql, function(err, results) {
              connection.release();
              if(err) { console.log(err); resolve({result:"ok"}); }
              resolve({result:"ok"}) ;
            });
          });
     });
};

service.getEmployeeById = function(id) {
    return new Promise((resolve, reject) => {
    pool.query('SELECT * from employee where id='+id, function (error, results, fields) {
    if (error) {
      resolve({});
      throw error;
    }else{
      if(results.length == 0){
        callback({});
      }else{
        resolve(results[0]);
      }
    }
  });
  });
};

//await / async
service.getEmployee = function(){
  return new Promise((resolve, reject) => {
    pool.query('SELECT * from employee', function (error, results, fields) {
    if (error) {
      resolve([]);
      throw error;
    }else{
      resolve(results);
    }
  });
  });
};



// service.searchCustomer = function(field,text){
// 	var tempList = [];
// 	for (var i = 0; i < customersList.length; i++) {
// 		if(customersList[i][field].toLowerCase().startsWith(text.toLowerCase())){
// 			 tempList.push(customersList[i]);
// 		}
// 	}
// 	return tempList;
// }
module.exports=service;