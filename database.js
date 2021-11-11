//Create Sqlite database 
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('weather.db');

//Insert data into the table getting the values from the sensor
var insert = function(temp, hum) {
  var db = new sqlite3.Database('weather.db');
  db.serialize(function() {
    db.run("INSERT INTO weather VALUES (datetime('now','localtime'), ?, ?)", temp, hum);
  })
  db.close();
};

//Create a function to read the last row of the table weather
var read = function() {
  var db = new sqlite3.Database('weather.db');
  return new Promise(function(resolve, reject) {
    db.serialize(function() {
      db.get("SELECT * FROM weather ORDER BY date DESC LIMIT 1", function(err, row) {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  });
};     


//Export the functions to be used in the other files
module.exports.insert = insert;
module.exports.read = read;
module.exports.db = db;
    