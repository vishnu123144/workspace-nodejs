var express = require('express');
var router = express.Router();

var customerService = require('../service/customerData');
var customerMysql = require('../service/customerMysql');

router.get('/', async (req, res, next) => {
  let data = await customerMysql.getCustomers();
  res.send(data);
});

router.post('/', async(req, res, next) => { //add
  let customer = req.body;
  await customerMysql.addCustomer(customer);
  res.send({msg:"customer added successfully", result:'ok'});
});

router.put('/', async(req, res, next) => { //add
  let customer =  req.body;
  let result = await customerMysql.updateCustomer(customer);
  res.send(result);
});

router.delete('/', async(req, res, next) => { //add
  let customer = req.body;
  let result =  await customerMysql.deleteCustomer(customer)
  res.send(result);
});

router.get('/:id', async(req, res, next) => { //add
  let result =  await customerMysql.getCustomerById(req.params.id);
  res.send(result);
});

module.exports = router;