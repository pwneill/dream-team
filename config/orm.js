var connection = require("../config/connection.js");

var orm = {
	read: function (tableInput, cb) {
		var queryString = "SELECT * FROM" + tableInput;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	selectAll: function (table1, table2, colName1, colName2, locId, colName3, typeId, cb) {
		var queryString = "SELECT * FROM " + table1;
		queryString += " LEFT JOIN " + table2 + " ON " + table1 + "." + colName1 + " = " + table2 + "." + colName1;
		queryString += " WHERE " + colName2 + " = " + locId;
		queryString += " AND " + colName3 + " = " + typeId;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	}, 
	selectRandom: function (colName1, colName2, tableInput, cb){
		var queryString = "SELECT * " + " FROM " + tableInput +" " + "ORDER BY rand()" + " " + "LIMIT 1";
		connection.query(queryString, function(err, res){
			if (err) {
				console.log(err.stack);
			}
			console.log(queryString);
			console.log("orm", res)
			cb(res);
		});
	}
};

module.exports = orm;