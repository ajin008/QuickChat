const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const userRoutes = require("./routes/userRoutes");
const eventBus = require("./events/eventBus");

require("./events/chatEvents");
require("./events/userEvents");

app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mount routes
app.use("/chat", chatRoutes);
app.use("/user", userRoutes);

app.set("eventBus", eventBus);

// Socket.IO setup
io.on("connection", (socket) => {
  console.log("New client connected");
  eventBus.registerSocket(io, socket);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

module.exports = { app, http };
