var express = require('express');
var router = express.Router();

var employeeService = require('../service/employeeData');
var employeeMysql = require('../service/employeeMysql');

router.get('/', async (req, res, next) => {
  let data = await employeeMysql.getEmployee();
  res.send(data);
});

router.post('/', async(req, res, next) => { //add
  let employee= req.body;
  await employeeMysql.addEmployee(employee);
  res.send({msg:"employee added successfully", result:'ok'});
});

router.put('/', async(req, res, next) => { //add
  let employee=  req.body;
  let result = await employeeMysql.updateEmployee(employee);
  res.send(result);
});

router.delete('/', async(req, res, next) => { //add
  let employee= req.body;
  let result =  await employeeMysql.deleteEmployee(employee)
  res.send(result);
});

router.get('/:id', async(req, res, next) => { //add
  let result =  await employeeMysql.getEmployeeById(req.params.id);
  res.send(result);
});

module.exports = router;