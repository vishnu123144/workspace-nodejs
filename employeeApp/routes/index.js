var express = require('express');
var router = express.Router();
var employeeService = require('../service/employeeData');
var employeeMysql = require('../service/employeeMysql');
var employeeMongodb = require('../service/employeeMongodb');

var moment = require("moment");

router.get('/', function(req, res, next) {
  res.redirect("/login");
  //res.render('index', { title: 'Express', name:'Brillio' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', name:'Brillio' });
});

router.get('/employee', async (req, res, next) => {
  let data = await employeeMongodb.getEmployee();
  res.render('employee', { title: 'Employees', data});
});

router.get('/employee/add', function(req, res, next) {
  res.render('add-employee', { title: 'Add Employee'});
});

router.get('/employee/edit/:id', async (req, res, next) =>{
  let employee = await employeeMongodb.getEmployeeById(req.params.id);
  res.render('edit-employee', { title: 'Update Employee', employee});
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', name:'Brillio' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', name:'Brillio' });
});

exports.index = function(req, res) {
  res.render('index', { moment: moment });
}

router.get('/employee/:field/:searchTxt', function(req, res, next) {
  res.render('employees', { title: 'Employees',data:employeeService.searchEmployee(req.params.field, req.params.searchTxt)});
});

module.exports = router;