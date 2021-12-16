var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Vishnu@139',
  database        : 'nodejs'
});
var service = {};
//await / async
service.getCustomers = function(){
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from customer', function (error, results, fields) {
      if (error) {
        resolve([]);
        throw error;
      }else{
        resolve(results);
      }
    });
    });
  };
  
  service.addCustomer = function(customer) {
    return new Promise((resolve, reject) => {
     pool.getConnection(function(err, connection) {
       if(err) { console.log(err); resolve({result:"fail"}); return; }
         connection.query("INSERT INTO customer set ? ",customer, function(err, results) {
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

service.updateCustomer = function(customer) {
    return new Promise((resolve, reject) => {
       pool.getConnection(function(err, connection) {
     if(err) { console.log(err); resolve({result:"fail"}); return; }
     connection.query("UPDATE customer set ? WHERE id = ? ",[customer,customer.id], function(err, results) {
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

service.deleteCustomer = function({id}) {
    return new Promise((resolve, reject) => {
       var sql = "delete FROM customer where id='"+id+"'";
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

service.getCustomerById = function(id) {
 return new Promise((resolve, reject) => {
 pool.query('SELECT * from customer where id='+id, function (error, results, fields) {
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

service.getCustomerBySearch = function(field, searchText, callback) {
  var recordList = [];
  var sql = "SELECT * FROM customer where "+field+" like '%"+searchText+"%'";
  console.log("sql:"+sql);
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback({}); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback({}); return; }
      if(results.length == 0){
        callback(recordList);
      }else{
        callback(results);
      }
    });
  });
};


module.exports=service;