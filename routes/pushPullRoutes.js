const express = require("express");
const pushpullController = require("../controllers/pushPullController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

router
  .route("/")
  .post(
    authController.allowedTo("admin"),
    pushpullController.addtrainingProramme
  )
  .get(pushpullController.getAlltrainingProrammes);

router
  .route("/:id")
  .delete(
    authController.allowedTo("admin"),
    pushpullController.deleteSpecificDay
  )
  .patch(
    authController.allowedTo("admin"),
    pushpullController.updateTrainingProrammes
  )
  .get(pushpullController.getSpecificDay);

module.exports = router;
