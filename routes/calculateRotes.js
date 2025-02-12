const express = require("express");
const calculateController = require("../controllers/calculateController");

const router = express.Router();

router.route("/").post(calculateController.Calculate);



module.exports = router;
