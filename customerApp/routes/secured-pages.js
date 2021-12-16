var express = require('express');
var router = express.Router();
var model = require('../service/customer');
var mongoCustomer = require('../service/customer-mongo');

router.get('/sample.txt', (req, res, next) => {
  res.send("sample url from router..."); //data
});


// Ecma Standard + Type + few things  = TypeScript
// JavaScript = Ecma Standard 

// abc = function (req, res, next){}
// abc =(req, res, next) => {}; //arrow 

router.get('/customer/add', (req, res, next) => {
  res.render('customer-add', { title: 'Add Customer', username:req.session.user});
});

router.get('/customer/edit/:id', (req, res, next) => {
	console.log("id is "+req.params.id);
  var callback = (customer) =>{
    console.log(JSON.stringify(customer));
    res.render('customer-edit', { title: 'Update Customer', customer:customer[0]});
  }
	var customer = mongoCustomer.getCustomerById(req.params.id).then(callback);
});

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', { title: 'Dashboard', username:req.session.user});
});

router.get('/customer', (req, res, next) => {
  var callback = function(result){
    res.render('customers', { title: 'Customers',data:result,username:req.session.user});
  }
  mongoCustomer.getCustomer().then(callback);
  /*
  var callback = function(result){
    res.render('customers', { title: 'Customers',data:result,username:req.session.user});
  }
  mongoCustomer.getCustomer(callback);
  */
});

router.get('/about', (req, res, next) => {
  res.render('dashboard', { title: 'About', username:req.session.user});
});

module.exports = router;
