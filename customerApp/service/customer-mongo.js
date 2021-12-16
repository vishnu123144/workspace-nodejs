var customerSchema = require('../schema/customer-model');


var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
var {ObjectId} = require('mongodb');

var service= {};
var dbName = 'nodejs';
const url = 'mongodb://localhost:27017';

service.getCustomer = function(){
  console.log("get records with mongoose");
  //this return promise
  return customerSchema.find();
}
  service.addCustomer = (record) => {
    console.log("addCustomer..");
    return customerSchema.create(record);
  }

  service.deleteCustomer = (recordId) => {
    console.log("deleteCustomer..");
    return customerSchema.deleteOne({"_id" :recordId});
  }

service.getCustomerById = (id) => {
   return customerSchema.find({"_id" : id});
};

service.updateCustomer = function(customer){
   console.log("updateCustomer.."+JSON.stringify(customer));
    customer._id = customer.id;
    delete(customer.id); // customer.id ._id
    return customerSchema.findByIdAndUpdate({_id:customer._id},customer);
};
module.exports = service;