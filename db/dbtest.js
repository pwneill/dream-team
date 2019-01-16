var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "LorissaLynn123118!",
    database: "lagerHead_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readbrewery_db();// Works
    readfood_db();// Works
    readbeer_db();// Works
    selectJoin();// Works
    selectWhere(); // Works
});

function readbrewery_db() {
    connection.query("SELECT * FROM brewery" + ";", function (err, res) {
        if (err) throw err;
        console.log("Logging out Brewery Names: \n");
        for (var i = 0; i < res.length; i++) {
            console.log("Brewery Name: " + res[i].Name);
        }
    })
}

function readfood_db() {
    connection.query("SELECT * FROM food" + ";", function (err, res) {
        if (err) throw err;
        console.log("Logging out Food Options: \n")
        for (var i = 0; i < res.length; i++) {
            // console.log(res[i]);
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            console.log("Brewery Name: " + res[i].brewery_name);
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            console.log("Food Option #1: " + res[i].food1_name);
            console.log("Description:" + res[i].food1_description);
            console.log(res[i].food1_name + "URL: " + res[i].food1_url);
            console.log("Does " + res[i].food1_name + "  deliver? : " + res[i].food1_delivers);
            console.log("===============================================================================================================================");
            console.log("Food Option #2: " + res[i].food2_name);
            console.log("Description:" + res[i].food2_description);
            console.log(res[i].food2_name + "URL: " + res[i].food2_url);
            console.log("Does " + res[i].food2_name + " deliver? :  " + res[i].food2_delivers);
            console.log("===============================================================================================================================");
            console.log("Food Option #3: " + res[i].food3_name);
            console.log("Description:" + res[i].food3_description);
            console.log(res[i].food3_name + "URL: " + res[i].food3_url);
            console.log("Does " + res[i].food3_name + " deliver? : " + res[i].food3_delivers);
            console.log("===============================================================================================================================");
            console.log("Food Option #4: " + res[i].food4_name);
            console.log("Description:" + res[i].food4_description);
            console.log(res[i].food4_name + " URL: " + res[i].food4_url);
            console.log("Does " + res[i].food4_name + " deliver? :  " + res[i].food4_delivers);
            console.log("==============================================================================================================================");
        }
    })
}

function readbeer_db() {
    connection.query("SELECT * FROM beer" + ";", function (err, res) {
        if (err) throw err;
        console.log("Logging out Beer Choices: \n ")
        for (var i = 0; i < res.length; i++) {

            // console.log(res[i])
            console.log("******************************************************************************************************************************")
            console.log("Brewery Name: " + res[i].brewery_name);
            console.log("******************************************************************************************************************************");
            console.log("------------------------------------------------------------------------------------------------------------------------------");

            console.log("Beer: " + res[i].brewery_beer);
            console.log("Brewery ID: " + res[i].breweryID);
            console.log("------------------------------------------------------------------------------------------------------------------------------");
        }
    })


}
function selectJoin(tableInput,colToSearch, valOfCol,cb){
    var queryString = "SELECT brewery_beer, brewery_name FROM beer INNER JOIN brewery ON beer.breweryID = brewery.breweryID";
    connection.query(queryString, [tableInput, colToSearch, valOfCol ], function(err, result){
        if (err) throw err;
        console.log(result);
    })
}

function selectWhere(tableInput, colToSearch, valOfCol,cb){
    var queryString = "SELECT * FROM food WHERE foodID = 22";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
        if (err) throw err;
        console.log(result);
    })
}



