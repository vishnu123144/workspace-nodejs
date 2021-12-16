var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/abc.txt', function(req, res, next) {
  res.send("This is abc.txt from router...")
});


router.get('/login', function(req, res, next) {
  delete(req.session.user);
  res.render('login', { title: 'Login' });
});

module.exports = router;