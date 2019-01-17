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

function updateBeers(beers) {
  for (i = 0; i < 2; i++) {
    fs.writeFileSync("./log.txt", newLine, function(err) {
      if (err) throw err;
    });
    fs.appendFileSync("./log.txt", "Now running: " + beers[i], function(
      err
    ) {
      if (err) throw err;
    });
    // breweries.forEach(function(brewery) {
    // console.log(brewery);
    BeerName = beers[i].name.replace(/\s/g, "+").replace("'", "");
    BeerBrewery = beers[i].brewery.replace(/\s/g, "+").replace("'", "");

    var query =
      "https://api.untappd.com/v4/search/beer?q=" +
      BeerBrewery + " " + BeerName +
      "&client_id=" +
      id +
      "&client_secret=" +
      secret;

    fs.appendFileSync("./log.txt", newLine, function(err) {
      if (err) throw err;
    });
    fs.appendFileSync("./log.txt", "Query: " + query, function(err) {
      if (err) throw err;
    });

    https
      .get(query, function(resp) {
        resp.on("data", function(data) {
          var beerData = JSON.parse(data).response.beers.items[0].beer;
          var ibu = beerData.beer_ibu;
          var abv = beerData.beer_abv;
          var desc = beerData.beer_description;
          var style = beerData.beer_style;


          //   console.log(breweryData);

          var queryString = "UPDATE brewery ";
          queryString += " SET ibu = " + '"' + ibu + '"';
          queryString += ", abv = " + abv;
          queryString += ", desc = " + desc;
          queryString += ", style = " + style;
          queryString += " WHERE Name = " + '"' + Brewery + '"';

          connection.query(queryString, function(err, response) {
            fs.appendFileSync("./log.txt", newLine, function(err) {
              if (err) throw err;
            });
            fs.appendFileSync("./log.txt", "Query: " + queryString, function(err) {
              if (err) throw err;
            });
            fs.appendFileSync(
              "./log.txt",
              "Response: " + JSON.parse(response),
              function(err) {
                if (err) throw err;
              }
            );
            if (err) {
              fs.appendFileSync("./log.txt", newLine, function(err) {
                if (err) throw err;
              });
              fs.appendFileSync("./log.txt", "Error: " + err.stack, function(
                err
              ) {
                if (err) throw err;
              });
            }
            console.log("done");
          });
        });
      })
      .on("error", function(err) {
        console.log("Error: " + err.message);
      });
    // });
  }
}

function beer() {
  var beers = [];

  var queryString = "SELECT * FROM beer;";
  connection.query(queryString, function(err, res) {
    if (err) {
      throw err;
    }
    res.forEach(function(beer) {
      beers.push({
        "name": beer.brewery_beer,
        "brewery": beer.brewery_name}
        );
      fs.writeFileSync("./beer_working.txt", newLine, function(err) {
        if (err) throw err;
      });
      fs.appendFileSync("./beer_working.txt", "Name: " + beer.brewery_beer + "\n", function(err) {
        if (err) throw err;
      });
      fs.appendFileSync("./beer_working.txt", "Brewery: " + beer.brewery_name + "\n", function(err) {
        if (err) throw err;
      });
    })

    updateBeers(beers)
  });
}

function updateBrewery(breweries) {
  for (i = 0; i < 2; i++) {
    fs.writeFileSync("./log.txt", newLine, function(err) {
      if (err) throw err;
    });
    fs.appendFileSync("./log.txt", "Now running: " + breweries[i], function(
      err
    ) {
      if (err) throw err;
    });
    // breweries.forEach(function(brewery) {
    // console.log(brewery);
    Brewery = breweries[i].replace(/\s/g, "+").replace("'", "");

    var query =
      "https://api.untappd.com/v4/search/brewery?q=" +
      Brewery +
      "&client_id=" +
      id +
      "&client_secret=" +
      secret;

    fs.appendFileSync("./log.txt", newLine, function(err) {
      if (err) throw err;
    });
    fs.appendFileSync("./log.txt", "Query: " + query, function(err) {
      if (err) throw err;
    });

    https
      .get(query, function(resp) {
        resp.on("data", function(data) {
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
          queryString += " WHERE Name = " + '"' + Brewery + '"';

          connection.query(queryString, function(err, response) {
            fs.appendFileSync("./log.txt", newLine, function(err) {
              if (err) throw err;
            });
            fs.appendFileSync("./log.txt", "Query: " + query, function(err) {
              if (err) throw err;
            });
            fs.appendFileSync(
              "./log.txt",
              "Response: " + JSON.parse(response),
              function(err) {
                if (err) throw err;
              }
            );
            if (err) {
              fs.appendFileSync("./log.txt", newLine, function(err) {
                if (err) throw err;
              });
              fs.appendFileSync("./log.txt", "Error: " + err.stack, function(
                err
              ) {});
            }
            console.log("done");
          });
        });
      })
      .on("error", function(err) {
        console.log("Error: " + err.message);
      });
    // });
  }
  // beer();
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
  beer();
  // brewery();
});
