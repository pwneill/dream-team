require("dotenv").config();

var mysql = require("mysql");

var https = require("https");

var User = process.env.DB_USER;
var Password = process.env.DB_PASSWORD;

var secret = process.env.CLIENT_SECRET;
var id = process.env.CLIENT_ID;

var fs = require("fs");
var newLine = "\n ---------------------------------------\n";

var connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: User,
		password: Password,
		database: "lagerHead_db"
	});
}

function sqlInsert(beerData, id) {
	var description = beerData.beer_description.toString();
	var type = beerData.beer_style.toString();
	var abv = beerData.beer_abv.toString(); 
	var ibu = beerData.beer_ibu.toString();

	var queryString = "UPDATE beer ";
	// eslint-disable-next-line quotes
	queryString += " SET description = " + '"' + description + '"';
	// eslint-disable-next-line quotes
	queryString += ", type = " + '"' + type + '"';
	queryString += ", abv = " + abv;
	queryString += ", ibu = " + ibu;
	// eslint-disable-next-line quotes
	queryString += " WHERE id = " + '"' + id + '"';
    
	// eslint-disable-next-line no-console
	console.log(queryString);

	connection
		.query(queryString, function(err, response) {
			fs.appendFileSync("./log.txt", newLine, function(err) {
				if (err) throw err;
			});
			fs.appendFileSync(
				"./log.txt",
				"beer (55): " + beerData.beer_name,
				function(err) {
					if (err) throw err;
				}
			);

			fs.appendFileSync("./log.txt", "\n Query (61): " + queryString, function(
				err
			) {
				if (err) throw err;
			});
			fs.appendFileSync(
				"./log.txt",
				"\n Rows Affected: " + response.affectedRows,
				function(err) {
					if (err) throw err;
				}
			);
		})
		.on("error", function(err) {
			fs.appendFileSync("./err.txt", "Error: " + err.stack, function(err) {
				if (err) throw err;
			});
		});
}

function doHTTP(query, id) {
	https.get(query, function(res) {

		res.on("data", function(data) {
			try {
				// JSON has weird issues parsing the Untappd response, but breaking it up this way works for some reason don't judge me
				var newData = JSON.parse(data);
				var newBeer = newData.response.beers;
				var beerData = newBeer.items[0].beer;

				sqlInsert(beerData, id);
			} catch (err) {
				fs.appendFileSync("./err.txt", "\n broken id: " + id, function(err) {
					if (err) throw err;
				});

				fs.appendFileSync("./err.txt", "\n err: " + err.stack, function(err) {
					if (err) throw err;
				});
			}
		});
	});
}

function updateBeer(newBeer) {
	var query =
    "https://api.untappd.com/v4/search/beer?q=" +
    newBeer.brewery + "+" + newBeer.name +
    "&client_id=" +
    id +
    "&client_secret=" +
    secret;

	fs.appendFileSync("./log.txt", newLine, function(err) {
		if (err) throw err;
	});
	fs.appendFileSync("./log.txt", "Beer (117): " + newBeer.name, function(err) {
		if (err) throw err;
	});

	fs.appendFileSync("./log.txt", "\n Query (121): " + query, function(err) {
		if (err) throw err;
	});

	doHTTP(query, newBeer.id);
}

function beer() {
	var queryString = "SELECT * FROM beer WHERE description is null;";
	connection.query(queryString, function(err, res) {
		res.forEach(function(beer) {
			var newBeer = {
				name: beer.brewery_beer
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", ""),
				id: beer.id,
				brewery: beer.brewery_name
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", "")
			};
			updateBeer(newBeer);
		});
	});
}

connection.connect(function(err) {
	if (err) {
		// eslint-disable-next-line no-console
		console.error("error connecting: " + err.stack);
		return;
	}
	// eslint-disable-next-line no-console
	console.log("connected as id " + connection.threadId);
	// eslint-disable-next-line no-console
	console.log(newLine);
	fs.writeFileSync("./log.txt", "Beer is running", function(err) {
		if (err) throw err;
	});
	beer();
});
