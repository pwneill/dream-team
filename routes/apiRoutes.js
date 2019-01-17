var beers_db = require("../models/tbd");


module.exports = function(app) {
  // Get all examples

  app.post("/api/beers", function(req, res) {
    console.log(req.body)

    //Creating an "allBeers" object to compare with user entered object
    var allBeers = [];
    var dbBeers = {}

    for (var i=0; i<beers_db.length; i++) {
        dbBeers[i] = {
          genLoc: beers_db.locationId[i],
          beerType: beers_db.beerTypeId[i],
          abv: beers_db.abvId[i],
          ibu: beers_db.ibuId[i],
        }

        allBeers.push(dbBeers[i]);
    }

    console.log(allBeers);
    
    var user = req.body
    var matchBeer = "";
    var matchBrewery = "";
    var totalDiff;
    var bestDiff = 100;

         
    
    for (var i=0; i<allBeers.length; i++) {
        for (var j=0; j<user.answer; j++) {
            totalDiff += Math.abs(parseInt(user.abvIbu[j]) - parseInt(allBeers.abvIbu[j]))
        }
    
        if(totalDiff <= bestDiff) {
            matchBeer = beers_db.name;
            matchBrewery = beers_db.brewery;
            bestDiff = totalDiff;
        }
    
        res.json({
            matchBeer,
            matchBrewery,
        })
    }
  });
  
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/beers/random", function(req, res) {
    var length = 60
    var randomNum = Math.floor(Math.random() + 1)* length
    res.json(randomNum)
  });

};