var express = require('express');
var router = express.Router();
var customerService = require('../service/customerData');
var customerMysql = require('../service/customerMysql');
var customerMongodb=require('../service/customerMongodb');

router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home', name:'Brillio' });
  });
  
  router.get('/customer', async (req, res, next) => {
    let data = await customerMongodb.getCustomers();
    res.render('customer', { title: 'Customers', data});
  });
  
  router.get('/customer/add', function(req, res, next) {
    res.render('add-customer', { title: 'Add Customer'});
  });
  
  router.get('/customer/edit/:id', async (req, res, next) =>{
    let customer = await customerMongodb.getCustomerById(req.params.id);
    res.render('edit-customer', { title: 'Update Customer', customer});
  });
  
  router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About', name:'Brillio' });
  });
  

  
module.exports = router;