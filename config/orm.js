/* eslint-disable no-console */
var connection = require("../config/connection.js");

var orm = {
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
	selectAllNoType: function (table1, table2, colName1, colName2, locId, cb) {
		var queryString = "SELECT * FROM " + table1;
		queryString += " LEFT JOIN " + table2 + " ON " + table1 + "." + colName1 + " = " + table2 + "." + colName1;
		queryString += " WHERE " + colName2 + " = " + locId;
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	}, 
	selectRandom: function (table1, colName, table2, cb){
		var queryString = "SELECT * " + " FROM " + table1;
		queryString += " LEFT JOIN " + table2 + " ON " + table1 + "." + colName + " = " + table2 + "." + colName;
		queryString += " ORDER BY rand() LIMIT 1";
		connection.query(queryString, function(err, res){
			if (err) {
				console.log(err.stack);
			}
			cb(res);
		});
	},
	selectOne: function(table1, colName1, table2, colName2, query, cb) {
		var queryString = "SELECT * " + " FROM " + table1;
		queryString += " LEFT JOIN " + table2 + " ON " + table1 + "." + colName1 + " = " + table2 + "." + colName1;
		// eslint-disable-next-line quotes
		queryString += " WHERE " + colName2 + " = " + '"' + query + '"';
		connection.query(queryString, function(err, res){
			if (err) {
				console.log(err.stack);
			}
			cb(res);
		});
	}
};

module.exports = orm;