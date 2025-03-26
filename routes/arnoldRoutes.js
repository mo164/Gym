const express = require("express");
const arnoldController = require("../controllers/arnoldSplitController");
const authController = require("../controllers/authController");
const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .post(authController.allowedTo("admin"), arnoldController.addtrainingProramme)
  .get(arnoldController.getAlltrainingProrammes);

router
  .route("/:id")
  .delete(authController.allowedTo("admin"), arnoldController.deleteSpecificDay)
  .patch(
    authController.allowedTo("admin"),
    arnoldController.updateTrainingProrammes
  )
  .get(arnoldController.getSpecificDay);

module.exports = router;
