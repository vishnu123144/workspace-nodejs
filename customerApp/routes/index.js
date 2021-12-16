var express = require('express');
var router = express.Router();
// var customerService = require('../service/customerData');
// var customerMysql = require('../service/customerMysql');

router.get('/', function(req, res, next) {
  res.redirect("/login");
  //res.render('index', { title: 'Express', name:'Brillio' });
});


/* GET home page. */
// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login', name:'Brillio' });
// });

router.get('/login', function(req, res, next) {
  delete(req.session.user);
  res.render('login', { title: 'Login' });
});

module.exports = router;

// check routes/index.js 
// check routes/index.ejs