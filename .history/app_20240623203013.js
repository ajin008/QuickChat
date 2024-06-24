const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const chatRoutes = require("./routes/chatRoutes");
const userRoutes = require("./routes/userRoutes");
const eventBus = require("./events/eventBus");

//middleware
app.use(express.json());
app.use(express.static("public"));
