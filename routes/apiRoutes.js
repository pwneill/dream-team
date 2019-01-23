/* eslint-disable no-console */
var lagerHead = require("../models/brewery");

function beerObj (beer) {
	var newBeer = {
		id: beer.id,
		name: beer.beer_name,
		brewery: beer.brewery_name,
		type: beer.beer_type,
		desc: beer.description,
		abv: beer.abv,
		ibu: beer.ibu,
		label: beer.label,
		food1: {
			name: beer.food1_name,
			desc: beer.food1_description,
			url: beer.url,
			delivers: beer.food1_delivers
		},
		food2: {
			name: beer.food2_name,
			desc: beer.food2_description,
			url: beer.food2_url,
			delivers: beer.food2_delivers
		},
		food3: {
			name: beer.food3_name,
			desc: beer.food3_description,
			url: beer.food3_url,
			delivers: beer.food3_delivers
		},
		food4: {
			name: beer.food4_name,
			desc: beer.food4_description,
			url: beer.food4_url,
			delivers: beer.food4_delivers
		}
	};
	return newBeer;
}

var runLogic = function(beers, userScore) {
	var bestMatchArr = [];

	for (var i = 1; i < beers.length; i++) {
		var beerScore = [];
		beerScore.push(beers[i].abv);
		beerScore.push(beers[i].ibu);

		var scoreDiff = 0;

		for (var j = 0; j < 2; j++) {
			scoreDiff += Math.abs(beerScore[j] - userScore[j]);
		}

		if (bestMatchArr.length === 0 || bestMatchArr[0].score > scoreDiff) {
			var newBeer = beerObj(beers[i]);
			bestMatchArr = [];
			bestMatchArr.push(newBeer);
		} else if (bestMatchArr[0].scoreDiff === scoreDiff) {
			newBeer = beerObj(beers[i]);
			bestMatchArr.push(newBeer);
		}
	}
	var num = [Math.floor(Math.random()) * bestMatchArr.length];
	var beerSelection = bestMatchArr[num];
	return beerSelection;
};

module.exports = function(app) {
	app.post("/api/beers", function(req, resp) {
		var beerProfile = req.body;
		var locId = beerProfile.location;
		var typeId = beerProfile.type;

		var beers = [];
		var userScore = [];

		userScore.push(beerProfile.abv);
		userScore.push(beerProfile.ibu);

		lagerHead.selectAll(locId, typeId, function(res) {
			if (res.length > 0) {
				res.forEach(function(beer) {
					beers.push(beer);
				});
			} else {
				lagerHead.selectAlNoType(locId, function(res) {
					res.forEach(function(beer) {
						beers.push(beer);
					});
				});
			}
			var data = runLogic(beers, userScore);
			resp.json(data);
		});
	});

	app.post("/api/beers/random", function (req, resp) {
		lagerHead.selectRandom(function(res){
			var data = beerObj(res[0]);
			resp.json(data);
		});
	});

	app.post("/api/beers/search", function(req, resp) {
		var query = req.body.query;
		lagerHead.selectOne(query, function(res) {
			console.log(res);
			if (res.length > 0) {
				var data = beerObj(res[0]);
				resp.json(data);
			} else {
				lagerHead.selectRandom(function(res) {
					var data = beerObj(res[0]);
					resp.json(data);
				});
			}
		});
	});
};
