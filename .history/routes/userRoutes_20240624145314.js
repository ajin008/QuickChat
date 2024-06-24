const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Render login page
router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/signup", (req, res) => {
  res.render("user/signup"); // Ensure this view exists
});

module.exports = router;
