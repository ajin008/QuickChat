const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Render login page
router.get("/login", (req, res) => {
  res.render("user/login");
});



// Render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});



module.exports = router;
