module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		res.render("index", {
			title: "LagerHead"
		});
	});

	// Load survey page
	app.get("/survey", function(req, res) {
		res.render("survey", {
			title: "LagerHead - Survey"
		});
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
