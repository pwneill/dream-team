var beers_db = require("../models/tbd");


module.exports = function (app) {
  // Get all examples

  app.post("/api/beers", function (req, res) {
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
    var potentialMatchArr1 = [];
    var potentialMatchArr2 = [];
    var potentialMatchArr3 = [];
    var potentialMatchArr4 = [];
    var potentialMatchArr5 = [];
    var potentialMatchArr6 = [];
    var potentialMatchArr7 = [];
    var potentialMatchArr8 = [];
    var potentialMatchArr9 = [];
    var potentialMatchArr10 = [];
    var potentialMatchArr11 = [];
    var potentialMatchArr12 = [];



    //Create a for loop to make an array of values for every beer in the database
    for (var i = 0; i < beers_db.length; i++) {
      dbBeers.push(beers_db.locationId[i], beers_db.beerTypeId[i], beers_db.abvId[i], beers_db.ibuId[i]);
      allBeers.push(dbBeers);
    }

    console.log(allBeers);


    //Nested for loop to compare every beer array from the database against the user generated array
    for (var i = 0; i < allBeers.length; i++) {
      for (var j = 0; j < user.length; j++) {
        totalDiff += Math.abs(parseInt(user[j]) - parseInt(allBeers[j]))
      }

      if (totalDiff === 0) {
        potentialMatchArr0.push(beers_db[j]);
      } else if (totalDiff === 1) {
        potentialMatchArr1.push(beers_db[j]);
      } else if (totalDiff === 2) {
        potentialMatchArr2.push(beers_db[j]);
      } else if (totalDiff === 3) {
        potentialMatchArr3.push(beers_db[j]);
      } else if (totalDiff === 4) {
        potentialMatchArr4.push(beers_db[j]);
      } else if (totalDiff === 5) {
        potentialMatchArr5.push(beers_db[j]);
      } else if (totalDiff === 6) {
        potentialMatchArr6.push(beers_db[j]);
      } else if (totalDiff === 7) {
        potentialMatchArr7.push(beers_db[j]);
      } else if (totalDiff === 8) {
        potentialMatchArr8.push(beers_db[j]);
      } else if (totalDiff === 9) {
        potentialMatchArr9.push(beers_db[j]);
      } else if (totalDiff === 10) {
        potentialMatchArr10.push(beers_db[j]);
      } else if (totalDiff === 11) {
        potentialMatchArr11.push(beers_db[j]);
      } else if (totalDiff === 12) {
        potentialMatchArr12.push(beers_db[j]);
      }
    }



    if (potentialMatchArr0 !== null) {
      var bestMatch = potentialMatchArr0[Math.floor(Math.random() * ((potentialMatchArr0.length - 1) - 0 + 1))]
    } else if (potentialMatchArr1 !== null) {
      var bestMatch = potentialMatchArr1[Math.floor(Math.random() * ((potentialMatchArr1.length - 1) - 0 + 1))]
    } else if (potentialMatchArr2 !== null) {
      var bestMatch = potentialMatchArr2[Math.floor(Math.random() * ((potentialMatchArr2.length - 1) - 0 + 1))]
    } else if (potentialMatchArr3 !== null) {
      var bestMatch = potentialMatchArr3[Math.floor(Math.random() * ((potentialMatchArr3.length - 1) - 0 + 1))]
    } else if (potentialMatchArr4 !== null) {
      var bestMatch = potentialMatchArr4[Math.floor(Math.random() * ((potentialMatchArr4.length - 1) - 0 + 1))]
    } else if (potentialMatchArr5 !== null) {
      var bestMatch = potentialMatchArr5[Math.floor(Math.random() * ((potentialMatchArr5.length - 1) - 0 + 1))]
    } else if (potentialMatchArr6 !== null) {
      var bestMatch = potentialMatchArr6[Math.floor(Math.random() * ((potentialMatchArr6.length - 1) - 0 + 1))]
    } else if (potentialMatchArr7 !== null) {
      var bestMatch = potentialMatchArr7[Math.floor(Math.random() * ((potentialMatchArr7.length - 1) - 0 + 1))]
    } else if (potentialMatchArr8 !== null) {
      var bestMatch = potentialMatchArr8[Math.floor(Math.random() * ((potentialMatchArr8.length - 1) - 0 + 1))]
    } else if (potentialMatchArr9 !== null) {
      var bestMatch = potentialMatchArr9[Math.floor(Math.random() * ((potentialMatchArr9.length - 1) - 0 + 1))]
    } else if (potentialMatchArr10 !== null) {
      var bestMatch = potentialMatchArr10[Math.floor(Math.random() * ((potentialMatchArr10.length - 1) - 0 + 1))]
    } else if (potentialMatchArr11 !== null) {
      var bestMatch = potentialMatchArr11[Math.floor(Math.random() * ((potentialMatchArr11.length - 1) - 0 + 1))]
    } else if (potentialMatchArr12 !== null) {
      var bestMatch = potentialMatchArr12[Math.floor(Math.random() * ((potentialMatchArr12.length - 1) - 0 + 1))]
    }


    res.json({
      matchBeer: bestMatch.beerName,
      matchBrewery: bestMatch.brewery,
      matchDescription: bestMatch.description,
      matchAbv: bestMatch.abv,
      matchIbu: bestMatch.ibu,
      matchPicture:bestMatch.picture,
      matchFood1: bestMatch.matchFood1,
      matchFood2: bestMatch.matchFood2,
      matchFood3: bestMatch.matchFood3,
      matchFood4: bestMatch.matchFood4
    })

  });


  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/beers/random", function (req, res) {
    var length = 60
    var randomNum = Math.floor(Math.random() + 1) * length
    res.json(randomNum)
  });

};


//compare the totalDiff of all absolute value user array vs allBeers array
    //     if(totalDiff === 0) { //if the absolute value = 0, push pbm0 into potentialMatchArr0
    //       pbm0.push(beers_db.name[j]);
    //       pbm0.push(beers_db.brewery[j]);
    //       pbm0.push(beers_db.abv[j]);
    //       pbm0.push(beers_db.ibu[j]);
    //       potentialMatchArr0.push(pbm0);
    //     } else if (1 < totalDiff < 3) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr13
    //       pbm13.push(beers_db.name[j]);
    //       pbm13.push(beers_db.brewery[j]);
    //       pbm13.push(beers_db.abv[j]);
    //       pbm13.push(beers_db.ibu[j]);
    //       potentialMatchArr13.push(pbm13);
    //     } else if (4 < totalDiff < 6) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr46
    //       pbm46.push(beers_db.name[j]);
    //       pbm46.push(beers_db.brewery[j]);
    //       pbm46.push(beers_db.abv[j]);
    //       pbm46.push(beers_db.ibu[j]);
    //       potentialMatchArr46.push(pbm46);
    //     } else if (7 < totalDiff < 9) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr79
    //       pbm.push(beers_db.name[j]);
    //       pbm.push(beers_db.brewery[j]);
    //       pbm79.push(beers_db.abv[j]);
    //       pbm79.push(beers_db.ibu[j]);
    //       potentialMatchArr79.push(pbm79);
    //     } else if (10 < totalDiff < 12) { //if the absolute value is between 1 & 3, push pbm13 into potentialMatchArr1012
    //       pbm1012.push(beers_db.name[j]);
    //       pbm1012.push(beers_db.brewery[j]);
    //       pbm1012.push(beers_db.abv[j]);
    //       pbm1012.push(beers_db.ibu[j]);
    //       potentialMatchArr1012.push(pbm1012);
    //     }