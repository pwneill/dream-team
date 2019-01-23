require("dotenv").config();

// var hour = 1000 * 60 * 60;
var mysql = require("mysql");

var User = process.env.DB_USER;
var Password = process.env.DB_PASSWORD;

var UntappdClient = require("node-untappd");
var debug = false;
var untappd = new UntappdClient(debug);

var clientSecret = process.env.CLIENT_SECRET;
var clientId = process.env.CLIENT_ID;

untappd.setClientId(clientId);
untappd.setClientSecret(clientSecret);

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

function runSQL(data, query) {
	connection
		.query(query, function(err, response) {
			fs.appendFileSync(
				"./log.txt",
				"\n Response: " + response,
				function(err) {
					if (err) throw err;
				}
			);
		})
		.on("error", function(err) {
			fs.appendFileSync("./err.txt", "Id: "+ data.id + "\n" + err.stack, function(err) {
				if (err) throw err;
			});
		});
}

function queryBuilder(beerData, id) {
	var description = "'" + beerData.beer_description.replace("'","") + "'";
	var type = beerData.beer_style.toString();
	var abv = beerData.beer_abv.toString(); 
	var ibu = beerData.beer_ibu.toString();

	var queryString = "UPDATE beer ";
	queryString += " SET description = " + description;
	// eslint-disable-next-line quotes
	queryString += ", type = " + '"' + type + '"';
	queryString += ", abv = " + abv;
	queryString += ", ibu = " + ibu;
	// eslint-disable-next-line quotes
	queryString += " WHERE id = " + id;
    
	// eslint-disable-next-line no-console
	runSQL(beerData, queryString);
}

function updateBeer(newBeer) {
	untappd.beerSearch(function(err,obj){
		// todo: make this script run automatically after timeout and check to see if there is a response
		// if (obj.meta.code === 429) {
		// 	setTimeout(beer,hour);
		// } else {
		var beerData = obj.response.beers.items[0].beer;

		if (err) {
			throw err;
		}
		queryBuilder(beerData, newBeer.id);
		// }
	}, newBeer);
}


function beer() {
	var queryString = "SELECT * FROM beer WHERE abv is null;";
	connection.query(queryString, function(err, res) {
		// todo: make this script run automatically after timeout and check to see if there is a response
		// if (res.length != 0) {
		for (var i = 0; i < 5; i++) {
		// res.forEach(function(beer) {
			// var newBeer = {
			// 	name: beer.brewery_beer
			// 		.replace(/\s/g, "+")
			// 		.replace("'", "")
			// 		.replace("&", "")
			// 		.replace("#", "%23"),
			// 	id: beer.id,
			// 	brewery: beer.brewery_name
			// 		.replace(/\s/g, "+")
			// 		.replace("'", "")
			// 		.replace("&", "")
			// 		.replace("%", "%23+")
			// };
			var newBeer = {
				q: res[i].brewery_name
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", "")
					.replace("#", "")
					.replace(".","") + "+" + res[i].brewery_beer
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", "")
					.replace("#", "")
					.replace(".",""),

				name: res[i].brewery_beer
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", "")
					.replace("#", "")
					.replace(".",""),

				id: res[i].id,
				brewery: res[i].brewery_name
					.replace(/\s/g, "+")
					.replace("'", "")
					.replace("&", "")
					.replace(".",""),
			};
			updateBeer(newBeer);
		// });
			// }
		}
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
	fs.writeFileSync("./err.txt", "Beer is running", function(err) {
		if (err) throw err;
	});
	beer();
});
