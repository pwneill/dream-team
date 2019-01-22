var db = require("../models/brewery");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		res.render("index", {
			msg: "Welcome!"
		});
	});

	// Load example page and pass in an example by id
	app.get("/survey", function(req, res) {
		res.render("survey", {
			msg: "Welcome!"
		});
	});

	// Load example page and pass in an example by id
	app.get("/result", function(req, res) {
		res.render("result", {
			msg: "Welcome!"
		});
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
