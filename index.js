const express = require("express");
const app = express();
const http = require("http");
var cors = require('cors');
const server = http.createServer(app);
var fs = require('fs');
var https = require('https');
const path = require("path");

//Import the insert,read and createTable from database.js
const { insert, read, db} = require("./database.js");
//To Create the table if it does not already exist
db.run("CREATE TABLE IF NOT EXISTS weather (date TEXT, temperature REAL, humidity REAL)");
const opts = {
  key: fs.readFileSync('file.pem'),
  cert: fs.readFileSync('file.crt')
}

var httpsServer = https.createServer(opts, app);
httpsServer.listen(5001, function(){
  console.log("HTTPS on port " + 3001);
})

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

app.get("/project", (req, res) => {
  res.sendFile(__dirname + "/Fan.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Create an API endpoint to get all the data from the database
app.get("/api/getReading", (req, res) => {
  read().then(data => {
    res.json(data);
  });
});

//Error In Handling MiddleWare
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

//Socket.IO
const io = require("socket.io")(server, {
  cors: {
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.attach(httpsServer);

io.on("connection", (socket) => {
  //Show the socket its id
  console.log("Socket id: " + socket.id);
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("Socket id: " + socket.id);
    console.log("user disconnected");
  });
  socket.on("Fan State", (msg) => {
    io.emit("Fan State", msg);
    console.log("Fan State " + msg);
  });
  socket.on("Sensor", (msg) => {
    io.emit("Sensor", msg);
    //Parse the JSON msg into temperature and humidity
    var temp = msg.temperature;
    var hum = msg.humidity;
    //Insert the data into the database
    insert(temp, hum);
    console.log("Temperature: " + temp + " Humidity: " + hum);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

// //Test the insert function
// insert(10, 20);
// //Test the read function by asserting that the inserted data is the same as the data read from the database
// read().then(data => {
//   console.log(data.temperature);
//   console.log(data.humidity);
//   console.log(data.date);
// });