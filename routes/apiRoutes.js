var lagerHead = require("../models/brewery");

var runLogic = function (beers, userScore) {
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
			// console.log("yo", bestMatchArr)
			var newBeer = {
				id: beers[i].beer_id,
				name: beers[i].beer_name,
				brewery: beers[i].brewery_name,
				desc: beers[i].description,
				abv: beers[i].abv,
				ibu: beers[i].ibu,
				label: beers[i].label,
				food1: {
					name: beers[i].food1_name,
					desc: beers[i].food1_description,
					url: beers[i].url,
					delivers: beers[i].food1_delivers
				},
				food2: {
					name: beers[i].food2_name,
					desc: beers[i].food2_description,
					url: beers[i].food2_url,
					delivers: beers[i].food2_delivers
				},
				food3: {
					name: beers[i].food3_name,
					desc: beers[i].food3_description,
					url: beers[i].food3_url,
					delivers: beers[i].food3_delivers
				},
				food4name: {
					name: beers[i].food4_name,
					desc: beers[i].food4_description,
					url: beers[i].food4_url,
					delivers: beers[i].food4_delivers
				},
			};
			bestMatchArr = [];
			bestMatchArr.push(newBeer);

		} else if (bestMatchArr[0].scoreDiff === scoreDiff) {
			newBeer = {
				id: beers[i].beer_id,
				name: beers[i].beer_name,
				brewery: beers[i].brewery_name,
				desc: beers[i].description,
				abv: beers[i].abv,
				ibu: beers[i].ibu,
				label: beers[i].label,
				food1: {
					name: beers[i].food1_name,
					desc: beers[i].food1_description,
					url: beers[i].url,
					delivers: beers[i].food1_delivers
				},
				food2: {
					name: beers[i].food2_name,
					desc: beers[i].food2_description,
					url: beers[i].food2_url,
					delivers: beers[i].food2_delivers
				},
				food3: {
					name: beers[i].food3_name,
					desc: beers[i].food3_description,
					url: beers[i].food3_url,
					delivers: beers[i].food3_delivers
				},
				food4: {
					name: beers[i].food4_name,
					desc: beers[i].food4_description,
					url: beers[i].food4_url,
					delivers: beers[i].food4_delivers
				},
			};
		}
	}
	var num = [(Math.floor(Math.random()) * (bestMatchArr.length))];
	// console.log(num);
	var beerSelection =  bestMatchArr[num];
	// console.log("hello", beerSelection);
	return beerSelection;
};

module.exports = function (app) {
// Get all examples

	app.post("/api/beers", function (req, resp) {
		// console.log(req.body);
		var beerProfile = req.body;
		var locId = beerProfile.location;
		var typeId = beerProfile.type;

		var beers = [];
		var userScore = [];

		userScore.push(beerProfile.abv);
		userScore.push(beerProfile.ibu);

		lagerHead.selectAll(locId, typeId, function(res) {
			res.forEach(function(beer) {
				beers.push(beer);
			});
			var recommend = runLogic(beers, userScore);
			resp.json(recommend);
		});
	});

	app.post("/api/beers/random", function (resp) {
		lagerHead.selectRandom(function(res){
			console.log("yo");
			console.log(res);
		});
	});
};