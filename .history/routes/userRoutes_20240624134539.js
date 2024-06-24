const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Render login page
router.get("/login", (req, res) => {
  res.render("user/login");
});

// Handle login form submission
// router.post("/login", userController.loginUser);

// Render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle signup form submission
// router.post("/signup", userController.signupUser);

module.exports = router;
