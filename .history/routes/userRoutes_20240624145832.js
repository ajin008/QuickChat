const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/user/signups", (req, res) => {
  res.render("user/signup");
});

module.exports = router;
