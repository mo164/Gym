const express = require("express");
const trainingSystemController = require("../controllers/trainingSystemController");
const router = express.Router();

router.route('/')
.post(trainingSystemController.addtrainingProramme)
.get(trainingSystemController.getAlltrainingProrammes)

router.route('/:id')
.delete(trainingSystemController.deleteSpecificDay)
.patch(trainingSystemController.updateTrainingProrammes)
.get(trainingSystemController.getSpecificDay)

module.exports = router;
