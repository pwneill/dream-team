var orm = require("../config/orm");

var brewery = {

	selectAll: function(locId, typeId, cb){
		orm.selectAll("beer", "brewery", "brewery_id", "locationId", locId, "type_id", typeId, function(res){
			cb(res);
		});
	}, 
	selectAlNoType: function(locId, cb) {
		orm.selectAllNoType("beer", "brewery","brewery_id", "locationId", locId, function(res){
			cb(res);
		});
	},
	selectRandom: function(cb){
		orm.selectRandom("beer", "brewery_id", "brewery", function(res){
			cb(res);
		});
	},
	selectOne: function(query, cb){
		orm.selectOne("beer", "brewery_id", "brewery", "beer_name", query, function(res){
			cb(res);
		});
	},
};

module.exports = brewery;