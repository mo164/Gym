const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signUp").post(authController.signUp);

router.route("/login").get(authController.login);

module.exports = router;
