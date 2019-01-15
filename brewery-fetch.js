require("dotenv").config();

var mysql = require("mysql");

var https = require("https")

var User = process.env.DB_USER;
var Password = process.env.DB_PASSWORD;

var secret = process.env.CLIENT_SECRET;
var id = process.env.CLIENT_ID;

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

function updateBrewery(breweries) {
    breweries.forEach(function(brewery) {
        Brewery = brewery.replace(/\s/g, "");

        var query = "https://api.untappd.com/v4/search/brewery?q=" + Brewery + "&client_id=" + id + "&client_secret=" +secret;

        https.get(query, function (res) {
            console.log(query)
            // var label  = res.beers.items[0].beer.beer_label;
            // var long = response.beers.items[0].beer.location.lng;
            // var lat = response.beers.items[0].beer.location.lat;
            // var name = brewery;

            // var queryString = "UPDATE brewery";
            // queryString += "SET label =" + label;
            // queryString += "SET latitude =" + lat;
            // queryString += "SET long =" + long;
            // queryString += "WHERE name =" + name;

            // connection.query(queryString, function (err, res) {
            //     if (err) {
            //         throw err;
            //     }
            //     console.log(res)
            //     console.log(brewery + "was updated")
            // })
        })
    })
}

function brewery () {
    var breweries = [];

    var queryString = "SELECT Name FROM brewery;"
    connection.query(queryString, function(err, res) {
        if (err) {
            throw err;
        }
        res.forEach(function(brewery) {
            breweries.push(brewery.Name);
        })
        updateBrewery(breweries)
    })
}

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
    brewery();
  });
  