const express = require("express");
const app = express();
const http = require("http");
var cors = require('cors');
const server = http.createServer(app);
const path = require("path");
var compression = require('compression');
var expressStaticGzip = require('express-static-gzip');
var port = process.env.PORT || 3000;

//Import the insert,read and createTable from database.js
const { insert, read, db} = require("./database.js");
//To Create the table if it does not already exist
db.run("CREATE TABLE IF NOT EXISTS weather (date TEXT, temperature REAL, humidity REAL)");
//Create a table fan state if it does not already exist
db.run("CREATE TABLE IF NOT EXISTS fan (state TEXT)");
//Insert the initial fan state
db.run("INSERT INTO fan VALUES ('true')");

//MiddleWare
app.use(compression()); //Compress all routes
app.use('/', expressStaticGzip(path.join(__dirname, "dist"), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
}));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/project", (req, res) => {
  res.sendFile(__dirname + "/dist/project.html");
});

app.get("/home",(req,res)=>{
  res.sendFile(__dirname + "/dist/home.html");
});

app.get("/slides", (req, res) => {
  res.sendFile(__dirname + "/dist/slides.html");
});

//Create an API endpoint to get all the data from the database
app.get("/api/getReading", (req, res) => {
  read().then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

//Create an API endpoint to read the last row of the fan state table
app.get("/api/getFanState", (req, res) => {
  db.all("SELECT * FROM fan LIMIT 1", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

//Create a Map to store the socket.id connection related to the ESP8266
var connected = new Map();

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

io.on("connection", (socket) => {
  //Show the socket its id
  console.log("Socket id: " + socket.id);
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("Socket id: " + socket.id);
    if(connected.get("ESP8266") == socket.id){ 
      console.log(connected);
      connected.delete("ESP8266");
      io.emit("ESP8266", false);
      console.log("ESP8266 Disconnected");
    }
    else
    console.log("user disconnected");
  });
  socket.on("Fan State", (msg) => {
    //Insert the fan state into the database
    db.run("DELETE FROM fan;");

    db.run("INSERT INTO fan VALUES (?)", msg);
    io.emit("Fan State", msg);
    console.log("Fan State " + msg);
  });
  socket.on("Sensor", (msg) => {
    //Set the connected state of the ESP8266
    if(!connected.has("ESP8266")){
      connected.set("ESP8266",socket.id);
      console.log("ESP8266 Connected");
      console.log(connected);
    }
    io.emit("Sensor", msg);
    //Parse the JSON msg into temperature and humidity
    var temp = msg.temperature;
    var hum = msg.humidity;
    //Insert the data into the database
    insert(temp, hum);
    console.log("Temperature: " + temp + " Humidity: " + hum);
  });
  socket.on("Manual",(msg) => {
   //convert the percentage to a pwm value
    io.emit("Manual", msg);
    console.log("Manual:");
    var pwm = Math.round(msg * 255 / 100);
    if(pwm < 0){
      pwm = 0;
    }
    else if(pwm > 255){
      pwm = 255;
    }
    console.log("Speed: "+msg);
    console.log("PWM: " + pwm);
    //Send the pwm value to the arduino
    io.emit("PWM", pwm);
  });
  socket.on("PWM",(msg) => {
    console.log("PWM: " + msg);
  });
  socket.on("Auto",(msg) => {
    io.emit("Auto", msg);
    console.log("Auto: " + msg);
    if(msg){
      read().then(data => {
        var temp = data.temperature;
        var hum = data.humidity;
        var speed = (temp-20)*(hum-50)/100;
        if(speed < 0){
          speed = 0;
        }
        else if(speed > 100){
          speed = 100;
        }
        var pwm = Math.round(speed * 255);
        //Check if the pwm value is within the range of 0-255
        if(pwm < 0){
          pwm = 0;
        }
        else if(pwm > 255){
          pwm = 255;
        }
        //Send the pwm value to the arduino
        io.emit("PWM", pwm);
        console.log("Speed: "+speed);
        console.log("PWM: " + pwm);
      });
    }
  });
});

server.listen(port, () => {
  console.log("listening on *:"+port);
});