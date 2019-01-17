var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.post("/api/beers", function(req, res) {
    console.log(req.body)


    var abvIbu = [];

    for (var i=0; i<allBeers.length; i++) {
        abvIbu = [allBeers.abv[i], allBeers.ibu[i]]
    }
    
    var user = req.body
    var matchBeer = "";
    var matchPhoto = "";
    var matchIbu = "";
    var matchAbv = "";
    var matchBrewery = "";
    var matchFood = [];
    var totalDiff;
    var bestDiff = 100;
    
    for (var i=0; i<allBeers.length; i++) {
        for (var j=0; j<user.abvIbu.length; j++) {
            totalDiff += Math.abs(parseInt(user.abvIbu[j]) - parseInt(allBeers.abvIbu[i]))
        }
    
        if(totalDiff <= bestDiff) {
            matchBeer = allBeers.name;
            matchPhoto = allBeers.photo;
            matchIbu = allBeers.ibu;
            matchAbv = allBeers.abv;
            matchBrewery = allBeers.brewery;
            matchFood = [allBeers.food[0], allBeers.food[1], allBeers.food[2]];
            bestDiff = totalDiff;
        }
    
        res.json({
            matchBeer,
            matchPhoto,
            matchIbu,
            matchAbv,
            matchBrewery,
            matchFood,
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
};
