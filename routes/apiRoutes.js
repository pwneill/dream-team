var db = require("../models/brewery");

module.exports = function(app) {
	// Get all examples
	app.get("/api/db", function(req, res) {
		db.lagerHead_db.findAll({}).then(function(dbLagerHead) {
			res.json(dbLagerHead);
		});
	});

	// Create a new example
	app.post("/api/examples", function(req, res) {
		db.Example.create(req.body).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	app.post("/api/beers/random", function(req, res) {
		var length = 60;
		var randomNum = Math.floor(Math.random() + 1)* length;
		res.json(randomNum);
	});
};
