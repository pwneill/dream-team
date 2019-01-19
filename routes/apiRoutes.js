var beers_db = require("../models/tbd");


module.exports = function(app) {
  // Get all examples

  app.post("/api/beers", function(req, res) {
    console.log(req.body)

    //Creating an "allBeers" array to compare with user entered object
    var allBeers = [];
    var dbBeers = []

    //Set variables
    var user = req.body.answer
    var matchBeer = "";
    var matchBrewery = "";
    var totalDiff;
    var bestMatch = [];
    var potentialMatchArr0 = [];
    var potentialMatchArr13 = [];
    var potentialMatchArr46 = [];
    var potentialMatchArr79 = [];
    var potentialMatchArr1012 = [];
    var pbm0 = []; //potential best match if value = 0
    var pbm13 = []; //potential best match if value = between 1 - 3
    var pbm46 = []; //potential best match if value = between 4 - 6
    var pbm79 = []; //potential best match if value = between 7 - 9
    var pbm1012 = []; //potential best match if value = between 10 - 12

    //Create a for loop to make an object of values for every beer in the database
    for (var i=0; i<beers_db.length; i++) {
        dbBeers[i].push(beers_db.locationId[i], beers_db.beerTypeId[i], beers_db.abvId[i], beers_db.ibuId[i]);
        allBeers.push(dbBeers[i]);
    }

    console.log(allBeers);

         
    //Nested for loop to compare every beer array from the database against the user generated array
    for (var i=0; i<allBeers.length; i++) {
        for (var j=0; j<user.length; j++) {
            totalDiff += Math.abs(parseInt(user[j]) - parseInt(allBeers[j]))
        }
    
    //compare the totalDiff of all absolute value user array vs allBeers array
        if(totalDiff === 0) { //if the absolute value = 0, push pbm0 into potentialMatchArr0
          pbm0.push(beers_db.name[j]);
          pbm0.push(beers_db.brewery[j]);
          pbm0.push(beers_db.abv[j]);
          pbm0.push(beers_db.ibu[j]);
          potentialMatchArr0.push(pbm0);
        } else if (1 < totalDiff < 3) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr13
          pbm13.push(beers_db.name[j]);
          pbm13.push(beers_db.brewery[j]);
          pbm13.push(beers_db.abv[j]);
          pbm13.push(beers_db.ibu[j]);
          potentialMatchArr13.push(pbm13);
        } else if (4 < totalDiff < 6) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr46
          pbm46.push(beers_db.name[j]);
          pbm46.push(beers_db.brewery[j]);
          pbm46.push(beers_db.abv[j]);
          pbm46.push(beers_db.ibu[j]);
          potentialMatchArr46.push(pbm46);
        } else if (7 < totalDiff < 9) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr79
          pbm.push(beers_db.name[j]);
          pbm.push(beers_db.brewery[j]);
          pbm79.push(beers_db.abv[j]);
          pbm79.push(beers_db.ibu[j]);
          potentialMatchArr79.push(pbm79);
        } else if (10 < totalDiff < 12) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr1012
          pbm1012.push(beers_db.name[j]);
          pbm1012.push(beers_db.brewery[j]);
          pbm1012.push(beers_db.abv[j]);
          pbm1012.push(beers_db.ibu[j]);
          potentialMatchArr1012.push(pbm1012);
        }


        if (potentialMatchArr0 !== null) { // ---------if there is an array that has any beers with a 0, Math.random, find a beer
          var bestMatch = potentialMatchArr[Math.floor(Math.random() * ((potentialMatchArr.length - 1) - 0 + 1))]
        } else if (potentialMatchArr13 !== null) { // ----if there is an array that has any beers between 1 and 3, Math.random, find a beer
          var bestMatch = potentialMatchArr[Math.floor(Math.random() * ((potentialMatchArr.length - 1) - 0 + 1))]
        } else if (potentialMatchArr46 !== null) {// ----if there is an array that has any beers between 4 and 6, Math.random, find a beer
          var bestMatch = potentialMatchArr[Math.floor(Math.random() * ((potentialMatchArr.length - 1) - 0 + 1))]
        } else if (potentialMatchArr79 !== null) { // ----if there is an array that has any beers between 7 and 9, Math.random, find a beer
          var bestMatch = potentialMatchArr[Math.floor(Math.random() * ((potentialMatchArr.length - 1) - 0 + 1))]
        } else if (potentialMatchArr1012 !== null) { // ----if there is an array that has any beers between 10 and 12, Math.random, find a beer
          var bestMatch = potentialMatchArr[Math.floor(Math.random() * ((potentialMatchArr.length - 1) - 0 + 1))]
        }

      }


        res.json({
          matchBeer: bestMatch.beerName,
          matchBrewery: bestMatch.brewery,
          matchAbv: bestMatch.abv,
          matchIbu: bestMatch.ibu
        })
    
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
