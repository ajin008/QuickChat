const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const chatRoutes = require("./routes/chatRoutes");
const userRoutes = require("./routes/userRoutes");
const eventBus = require("./events/eventBus");

require("./events/chatEvents");
require("./events/userEvents");

app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form submissions
app.use(express.static("public"));

app.use("/chat", chatRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.redirect("/user/login");
});

app.set("eventBus", eventBus);
9
// Socket.IO setup
io.on("connection", (socket) => {
  console.log("New client connected");
  eventBus.registerSocket(io, socket);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

module.exports = { app, http };
