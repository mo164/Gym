const express = require("express");
const arnoldController = require("../controllers/arnoldSplitController");
const router = express.Router();

router.route('/')
.post(arnoldController.addtrainingProramme)
.get(arnoldController.getAlltrainingProrammes)

router.route('/:id')
.delete(arnoldController.deleteSpecificDay)
.patch(arnoldController.updateTrainingProrammes)
.get(arnoldController.getSpecificDay)

module.exports = router;
