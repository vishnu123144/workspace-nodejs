var app = {};
app.name = function() {
    return "Hello, testing!";
  }

app.sum = function(a,b) {
    return a+b;
  }

app.mul = function(a,b) {
    return a*b;
  }
module.exports = app;
