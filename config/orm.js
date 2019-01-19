var connection = require("../config/connection.js");

var orm = {
	read: function (tableInput, cb) {
		var queryString = "SELECT * FROM" + tableInput;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	selectAll: function (table1, table2, colName, cb) {
		var queryString = "SELECT * FROM" + table1;
		queryString += "LEFT JOIN" + table2 + "ON" + table1 + "." + colName + "=" + table2 + "." + colName;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;