const express = require("express");
const calculateController = require("../controllers/calculateController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect)
router.route("/").post(calculateController.Calculate);



module.exports = router;
