const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');
const service= {};
const dbName = 'nodejs';
const url = 'mongodb://localhost:27017';

service.getEmployeePromise = function(){
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('employee').find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
        resolve(result);
      });
  });
 });
};

service.getEmployees = function(){
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('employee').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result);
        resolve(result);
        client.close();
      });
  });
   });
};

service.getEmployeeById = function(id){
  return new Promise((resolve, reject) => {
  var record = {};
    console.log(">> getCustomerById "+ id);
    MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('employee').find({"_id" : ObjectId(id)}).toArray(function (err, result) {
        if (err) throw err
        console.log(result);
        resolve(result[0]);
        client.close();
      });
      });
     });
};

service.addEmployee = function(record) {
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('employee');
    collection.insertMany([record],function(err,result){
      resolve({result:'ok'});
      client.close();
    });
  });
});
}

service.deleteEmployee = function({id}){
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('employee');
    collection.deleteOne({"_id" : ObjectId(id)},function(err,result){
      resolve({result:'ok'});
      client.close();
    });  
  });
});
};

service.updateEmployee = function(customer){
    return new Promise((resolve, reject) => {
    let id = customer.id;
    delete(customer.id);
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('employee');
    collection.updateOne({"_id" : ObjectId(id)},{ $set: employee },function(err,result){
      resolve({result:'ok'});
      client.close();
    });
  });
  });
};

service.getEmployeesBySearch = function(field,searchText,callback){
  return new Promise((resolve, reject) => {
    var records = [];
    //searhObject[searchParam.field] = "/"+searchParam.searchword+"/i";
    //console.log("search ==> "+JSON.stringify(searchParam));
    console.log("field:"+field);
    console.log("searchText:"+searchText);

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('employee').find({[field]:{'$regex' : searchText, '$options' : 'i'}}).toArray(function (err, result) {
        if (err) throw err
        console.log("result:"+JSON.stringify(result));
        resolve(result);
        client.close();
      });
  });
  });
}
//sqlService.getemployeeBySearch(searchParam,callback);
service.getEmployeesBySearchOLD = function(searchParam){
    var records = [];
    //searhObject = {searchParam.field: '//i'}
    MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('employee').find({name: /vivek/i}).toArray(function (err, result) {
        if (err) throw err
        console.log("result:"+JSON.stringify(result));
        resolve(result);
        client.close();
      });
  });
}

module.exports=service;
