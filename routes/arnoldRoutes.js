const express = require("express");
const arnoldController = require("../controllers/arnoldSplitController");
const authController = require("../controllers/authController");
const router = express.Router();
router.use(authController.protect)
router.route('/')
.post(arnoldController.addtrainingProramme)
.get(arnoldController.getAlltrainingProrammes)

router.route('/:id')
.delete(arnoldController.deleteSpecificDay)
.patch(arnoldController.updateTrainingProrammes)
.get(arnoldController.getSpecificDay)

module.exports = router;
