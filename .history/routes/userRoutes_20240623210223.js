const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController/authController");

router.get("quickChat/login", (req, res) => {
  res.sendFile("user/login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
