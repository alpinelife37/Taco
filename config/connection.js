const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localHost",
  port: 3306,
  user: "root",
  password: "1982",
  database: "taco_tracker"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("you are connected");
});

module.exports = connection;
