var orm = require("../config/orm");

var brewery = {

	selectAll: function(locId, typeId, cb){
		orm.selectAll("beer", "brewery", "brewery_id", "locationId", locId, "type_id", typeId, function(res){
			cb(res);
		});
	}, 
	selectRandom: function(cb){
		orm.selectRandom("beer", "brewery_id", "brewery", function(res){
			console.log(res);
			cb(res);
		});
	}
};

module.exports = brewery;