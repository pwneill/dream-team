require("dotenv").config();

var mysql = require("mysql");

const https = require("https");

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


function beer() {
  var beers = [];

  var queryString = "SELECT Name FROM brewery;";
  connection.query(queryString, function(err, res) {
    if (err) {
      throw err;
    }
    res.forEach(function(brewery) {
      breweries.push(brewery.Name);
    });
    updateBrewery(breweries);
  });
}


function updateBrewery(breweries) {
  breweries.forEach(function(brewery) {
      console.log(brewery)
    Brewery = brewery.replace(/\s/g, "+");

    var query =
      "https://api.untappd.com/v4/search/brewery?q=" +
      Brewery +
      "&client_id=" +
      id +
      "&client_secret=" +
      secret;
    console.log(query);

    https
      .get(query, function(resp) {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", function(chunk) {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", function() {
          var breweryData = JSON.parse(data).response.brewery.items[0].brewery;
          var label = breweryData.brewery_label;
          var lat = breweryData.location.lat;
          var lng = breweryData.location.lng;
          // var name = breweryData.brewery_name;

        //   console.log(breweryData);

          var queryString = "UPDATE brewery ";
          queryString += " SET label = " + '"' + label + '"';
          queryString += ", latitude = " + lat;
          queryString += ", longitude = " + lng;
          queryString += " WHERE Name = " + '"' + brewery + '"';

          console.log(queryString);
          connection.query(queryString, function(err, res) {
            if (err) {
              throw err;
            }
            console.log("done");
          });
        });
      })
      .on("error", function(err) {
        console.log("Error: " + err.message);
      });
  });
  beer();
}

function brewery() {
  var breweries = [];

  var queryString = "SELECT Name FROM brewery;";
  connection.query(queryString, function(err, res) {
    if (err) {
      throw err;
    }
    res.forEach(function(brewery) {
      breweries.push(brewery.Name);
    });
    updateBrewery(breweries);
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  brewery();
});
