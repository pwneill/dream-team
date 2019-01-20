var lagerHead = require("../models/brewery");

module.exports = function (app) {
// Get all examples

	app.post("/api/beers", function (req, res) {
		console.log(req.body);
		var beerProfile = req.body.answer;
		var locId = beerProfile.location;
		
		var userScore = [];
		var beers = [];

		lagerHead.selectAll(locId, function(req, res) {
			res.forEach(function(beer) {
				beers.push(beer);
			});
		});

		userScore.push(beerProfile.abv);
		userScore.push(beerProfile.ibu);

		var bestMatchArr = [];
	
		for (var i = 1; i < beers.length; i++) {
			var beerScore = [];
			beerScore.push(beers[i].abv);
			beerScore.push(beers[i].ibu);

			var scoreDiff = 0;

			for (var j = 0; j < 2; j++) {
				scoreDiff += Math.abs(beerScore[j] - userScore[j]);
			}

			if (bestMatchArr.length === 0 || bestMatchArr[0].scoreDiff > scoreDiff) {
				var newBeer = {
					id: beers[i].id,
					name: beers[i].name,
					brewery: beers[i].brewery,
					abv: beers[i].abv,
					ibu: beers[i].ibu,
					label: beers[i].label,
					food1: {
						name: beers[i].food1name,
						desc: beers[i].food1description,
						delivers: beers[i].food1delivers
					},
					food2: {
						name: beers[i].food2name,
						desc: beers[i].food2description,
						delivers: beers[i].food2delivers
					},
					food3: {
						name: beers[i].food3name,
						desc: beers[i].food3description,
						delivers: beers[i].food3delivers
					},
					food4: {
						name: beers[i].food4name,
						desc: beers[i].food4description,
						delivers: beers[i].food4delivers
					}
				};
				bestMatchArr = [];
				bestMatchArr.push(newBeer);

			} else if (bestMatchArr[0].scoreDiff === scoreDiff) {
				newBeer = {
					id: beers[i].id,
					name: beers[i].name,
					brewery: beers[i].brewery,
					abv: beers[i].abv,
					ibu: beers[i].ibu,
					label: beers[i].label,
					food1: {
						name: beers[i].food1name,
						desc: beers[i].food1description,
						delivers: beers[i].food1delivers
					},
					food2: {
						name: beers[i].food2name,
						desc: beers[i].food2description,
						delivers: beers[i].food2delivers
					},
					food3: {
						name: beers[i].food3name,
						desc: beers[i].food3description,
						delivers: beers[i].food3delivers
					},
					food4: {
						name: beers[i].food4name,
						desc: beers[i].food4description,
						delivers: beers[i].food4delivers
					}
				};
				bestMatchArr.push(newBeer);
			}
		}

		var num = Math.random() * bestMatchArr.length;
		var beerSelection =  beers[num];

		res.json(beerSelection);
	});



	app.post("/api/beers/random", function (req, res) {
		var length = 60;
		var randomNum = Math.floor(Math.random() + 1) * length;
		res.json(randomNum);
	});

};