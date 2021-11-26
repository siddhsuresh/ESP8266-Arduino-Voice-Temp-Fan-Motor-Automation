const express = require("express");
const app = express();
const http = require("http");
var cors = require('cors');
const server = http.createServer(app);
var fs = require('fs');
//var https = require('https');
const path = require("path");
var compression = require('compression');
var expressStaticGzip = require('express-static-gzip');
const { instrument } = require("@socket.io/admin-ui");
var port = process.env.PORT || 3000;

//Import the insert,read and createTable from database.js
const { insert, read, db} = require("./database.js");
//To Create the table if it does not already exist
db.run("CREATE TABLE IF NOT EXISTS weather (date TEXT, temperature REAL, humidity REAL)");

//Use For Heroku Deployment
//app.all('*', function(req, res, next) {
//    if (req.headers['x-forwarded-proto'] != 'https')
//        res.redirect('https://' + req.headers.host + req.url)
//    else
//        next() /* Continue to other routes if we're not redirecting */
//});

//Use For Cloudflare Tunnel Deployment
/*const opts = {
  key: fs.readFileSync('cert/private-key.pem'),
  cert: fs.readFileSync('cert/cert.pem'),
  pfx: fs.readFileSync('cert/cert.pfx')
}

var httpsServer = https.createServer(opts, app);
httpsServer.listen(3001, function(){
  console.log("HTTPS on port " + 3001);
})*/

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
  res.sendFile(__dirname + "/dist/project.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/slides", (req, res) => {
  res.sendFile(__dirname + "/dist/slides.html");
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

//io.attach(httpsServer);

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
  socket.on("Manual",(msg) => {
   //convert the percentage to a pwm value
    var pwm = Math.round(msg * 255 / 100);
    //Check if the pwm value is within the range of 60-255
    if(pwm < 60){
      pwm = 60;
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
    console.log("Auto: " + msg);
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
      if(msg){
        io.emit("PWM", pwm);
      }
      console.log("Speed: "+speed);
      console.log("PWM: " + pwm);
      });
  });
});

server.listen(port, () => {
  console.log("listening on *:"+port);
});