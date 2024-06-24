const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Render login page
router.get("quickChat/login", (req, res) => {
  res.render("user/login");
});

// Render signup page
router.get("quickChat/signup", (req, res) => {
  res.render("user/signup");
});

module.exports = router;
