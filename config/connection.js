require("dotenv").config();
var mysql = require("mysql");

var User = "root";
var Password = "LorissaLynn123118!";

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: User,
	password: Password,
	database: "LagerHead_db"
});

// Make connection.
connection.connect(function(err) {
	if (err) {
		// eslint-disable-next-line no-console
		console.error("error connecting: " + err.stack);
		return;
	}
	// eslint-disable-next-line no-console
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
