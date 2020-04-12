const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const port = 8080;

server.listen(port, function(){
  console.log(`listening on ${port}`);
});

io.on("connection", (socket) => {

  socket.on("addPost", (post) => {
    io.emit("receivePost", post);
  });
});
