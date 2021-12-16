var app = require("../appLogic");
describe("AppLogic test", function() {
  it("test of AppLogic name", function() {
    expect(app.name()).toEqual('Hello, testing!');
  });

  it("test of sum", function() {
    expect(app.sum(2,3)).toEqual(5);
  });

  it("test of mul", function() {
    expect(app.mul(2,3)).toEqual(6);
  });
});
