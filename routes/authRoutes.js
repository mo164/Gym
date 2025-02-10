const express = require("express");
const userController = require("../controllers/authController");

const router = express.Router();

router.route("/signUp").post(userController.signUp);

router.route("/login").get(userController.login);

module.exports = router;
