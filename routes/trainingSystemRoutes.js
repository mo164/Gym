const express = require("express");
const trainingSystemController = require("../controllers/trainingSystemController");
const router = express.Router();

router.route('/')
.get(trainingSystemController.trainingProrammes)

module.exports = router;
