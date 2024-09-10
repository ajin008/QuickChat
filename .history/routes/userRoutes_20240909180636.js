const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController/authController");

router.get("/landingPage",(req,res))

// Render login page
router.get("/login", (req, res) => {
  res.render("user/login");
});

// Render signup page
router.get("/signup", (req, res) => {
  res.render("user/signup");
});

router.post("/userSignupInput", userController.signup_stageOne);

router.get("/home", (req, res) => {
  res.render("user/home");
});

module.exports = router;
