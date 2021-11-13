const express = require("express");
const app = express();
const http = require("http");
var cors = require('cors');
const server = http.createServer(app);
var fs = require('fs');
var https = require('https');
const path = require("path");
var compression = require('compression');
var expressStaticGzip = require('express-static-gzip');
const { instrument } = require("@socket.io/admin-ui");

//Import the insert,read and createTable from database.js
const { insert, read, db} = require("./database.js");
//To Create the table if it does not already exist
db.run("CREATE TABLE IF NOT EXISTS weather (date TEXT, temperature REAL, humidity REAL)");
const opts = {
  key: fs.readFileSync('cert/private-key.pem'),
  cert: fs.readFileSync('cert/cert.pem'),
  pfx: fs.readFileSync('cert/cert.pfx')
}

var httpsServer = https.createServer(opts, app);
httpsServer.listen(3001, function(){
  console.log("HTTPS on port " + 3001);
})

//MiddleWare
app.use(compression()); //Compress all routes
app.use('/', expressStaticGzip(path.join(__dirname, "dist"), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
	setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=86400");
   }
}));
app.use('/', express.static(path.join(__dirname, '/admin-socketio/dist/')))
app.use(cors());
app.use(express.json());

app.get("/project", (req, res) => {
  res.sendFile(__dirname + "/dist/Fan.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin-socketio/dist/index.html");
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
    credentials: true
  }
});

instrument(io, {
  auth: false,
  namespaceName : "/"
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