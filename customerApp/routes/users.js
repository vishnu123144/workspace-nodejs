var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /users/users/one
router.get('/users/one', function(req, res, next) {
  res.send('respond with a resource user one');
});

// /users/auth
router.post('/auth', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  if(username == password && req.body.username !=undefined){
    req.session.user = req.body.username;
    res.send({result:'success', msg:"user login successfully"});
  }else{
    res.send({result:'fail', msg:"user login failed"});
  }
});

module.exports = router;


module.exports = router;
