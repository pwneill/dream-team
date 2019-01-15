var db = require("../models");

module.exports = function(app) {
  app.post("/api/beers/random", function(req, res) {
    var length = 60
    var randomNum = Math.floor(Math.random() + 1)* length
    res.json(randomNum)
  });
};
