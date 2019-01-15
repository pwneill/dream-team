var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.post("/api/beers", function(req, res) {
    console.log(req.body)

    var beer = req.body;
    var beerType = beer.type;
    var location = beer.location;
    //SELECT * FROM beer WHERE type = beer.type 
    var totalDifference;
    var bestDifference = 50;
    console.log(newFriend);
   
    friendsData.forEach(function(friends){
        totalDifference = 0
            
        for (var j=0; j<newFriend.scores.length; j++){
            totalDifference += Math.abs((parseInt(newFriend.scores[j])) - parseInt(friends.scores[j])) 
            
        }   

        if (totalDifference <= bestDifference) {
            matchName = friends.name;
            matchPhoto = friends.photo;
            bestDifference = totalDifference;
        }


        
    });


   
    res.json({
        name: matchName,
        photo: matchPhoto
    });

    friendsData.push(newFriend);
    
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
