const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/reveal', express.static(path.join(__dirname,'node_modules/reveal.js/')));
app.use(express.json());

app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/Fan.html');
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.get('/presentation',(req,res)=>{
  res.sendFile(__dirname + '/presentation.html');
})

//Error In Handling MiddleWare
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
});

//Socket.IO
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('Fan State', (msg) => {
    io.emit('Fan State', msg);
    console.log("Fan State "+msg);
  });
  socket.on('Sensor',(msg)=>{
    io.emit('Sensor',msg);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
