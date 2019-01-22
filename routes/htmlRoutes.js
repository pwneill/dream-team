module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		res.render("index", {
			msg: "Welcome!"
		});
	});

	// Load survey page
	app.get("/survey", function(req, res) {
		res.render("survey", {
			msg: "Welcome!"
		});
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
