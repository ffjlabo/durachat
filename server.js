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
  socket.on("loginUser", (name) => {
    socket.name = name;
    socket.emit("receiveMessage", `ーー${socket.name}が入室しました`);
  });

  socket.on("disconnect", () => {
    if (!socket.name) return;
    socket.broadcast.emit("receiveMessage", `ーー${socket.name}が退室しました`);
  });

  socket.on("addPost", (post) => {
    io.emit("receivePost", post);
  });
});
