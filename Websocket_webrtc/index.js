const express = require("express");
const app = express();
const path = require("path");
const { Server } = require("socket.io");

const server = app.listen(3000, () => {
  console.log("app is listening at 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit("new message", data);
  });

  socket.on("disconnect", () => {
    console.log("disconnected from server");
  });
});
