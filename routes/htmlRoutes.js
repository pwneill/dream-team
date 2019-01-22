var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        msg: "Welcome!",
        examples: {}
      });
  });

  // Load example page and pass in an example by id
  app.get("/result", function(req, res) {
    res.render("result", {
      msg: "Welcome!",
      examples: {}
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
