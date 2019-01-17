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

function sqlInsert(breweryData, id) {
	var label = breweryData.brewery_label;
	var lat = breweryData.location.lat;
	var lng = breweryData.location.lng;

	var queryString = "UPDATE brewery ";
	// eslint-disable-next-line quotes
	queryString += " SET label = " + '"' + label + '"';
	queryString += ", latitude = " + lat;
	queryString += ", longitude = " + lng;
	// eslint-disable-next-line quotes
	queryString += " WHERE id = " + '"' + id + '"';

	connection
		.query(queryString, function(err, response) {
			fs.appendFileSync("./log.txt", newLine, function(err) {
				if (err) throw err;
			});
			fs.appendFileSync(
				"./log.txt",
				"Brewery (189): " + breweryData.name,
				function(err) {
					if (err) throw err;
				}
			);

			fs.appendFileSync("./log.txt", "\n Query (190): " + queryString, function(
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
			if (err) {
				fs.appendFileSync("./log.txt", newLine, function(err) {
					if (err) throw err;
				});
				fs.appendFileSync("./log.txt", "Error: " + err.stack, function(err) {
					if (err) throw err;
				});
			}
		})

		.on("error", function(err) {
			fs.appendFileSync("./log.txt", "Error: " + err.stack, function(err) {
				if (err) throw err;
			});		});
}

function doHTTP(query, id) {
	https.get(query, function(resp) {
		resp.on("data", function(data) {
			try {
				var breweryData = JSON.parse(data).response.brewery.items[0].brewery;
			} catch (err) {
				fs.appendFileSync("./log.txt", "\n broken id: " + id, function(err) {
					if (err) throw err;
				});
				fs.appendFileSync("./log.txt", "\n err: " + err.message, function(err) {
					if (err) throw err;
				});
			}
			sqlInsert(breweryData, id);
		});
	});
}

function updateBrewery(newBrewery) {
	var query =
    "https://api.untappd.com/v4/search/brewery?q=" +
    newBrewery.name +
    "&client_id=" +
    id +
    "&client_secret=" +
    secret;

	fs.appendFileSync("./log.txt", newLine, function(err) {
		if (err) throw err;
	});
	fs.appendFileSync("./log.txt", "Brewery: " + newBrewery.name, function(err) {
		if (err) throw err;
	});

	fs.appendFileSync("./log.txt", "\n Query: " + query, function(err) {
		if (err) throw err;
	});

	doHTTP(query, newBrewery.id);
	// beer();
}

function brewery() {
	var queryString = "SELECT * FROM brewery WHERE label is null;";
	connection.query(queryString, function(err, res) {
		res.forEach(function(brewery) {
			var newBrewery = {
				name: brewery.Name.replace(/\s/g, "+").replace("'", "").replace("&",""),
				id: brewery.id
			};
			updateBrewery(newBrewery);
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
	// beer();
	brewery();
});
