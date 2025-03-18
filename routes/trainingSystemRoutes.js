const express = require("express");
const trainingSystemController = require("../controllers/trainingSystemController");
const router = express.Router();

router.route('/')
.post(trainingSystemController.addtrainingProramme)
.get(trainingSystemController.getAlltrainingProrammes)

module.exports = router;
