const express = require("express");
const pushpullController = require("../controllers/pushPullController");
const router = express.Router();

router.route('/')
.post(pushpullController.addtrainingProramme)
.get(pushpullController.getAlltrainingProrammes)

router.route('/:id')
.delete(pushpullController.deleteSpecificDay)
.patch(pushpullController.updateTrainingProrammes)
.get(pushpullController.getSpecificDay)

module.exports = router;
