const express = require("express");
const trainingSystemController = require("../controllers/trainingSystemController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

router
  .route("/")
  .post(
    authController.allowedTo("admin"),
    trainingSystemController.addtrainingProramme
  )
  .get(trainingSystemController.getAlltrainingProrammes);

router
  .route("/:id")
  .delete(
    authController.allowedTo("admin"),
    trainingSystemController.deleteSpecificDay
  )
  .patch(
    authController.allowedTo("admin"),
    trainingSystemController.updateTrainingProrammes
  )
  .get(trainingSystemController.getSpecificDay);

module.exports = router;
