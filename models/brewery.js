var orm = require("../config/orm");

var brewery = {

	selectAll: function(locId, typeId, cb){
		orm.selectAll("beer", "brewery", "id", "locationId", locId, "typeId", typeId, function(res){
			res(cb);
		});
	}
};

module.exports = brewery;