const express = require("express");
const healthyController = require("../controllers/healthyController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);
router
  .route("/")
  .post(
    authController.allowedTo("admin"),
    healthyController.createHealthySource
  )
  .get(healthyController.getAllHealthySources);

router
  .route("/:id")
  .get(healthyController.getSpecificHealthySource)
  .patch(
    authController.allowedTo("admin"),
    healthyController.updateHealthySource
  )
  .delete(
    authController.allowedTo("admin"),
    healthyController.deleteHealthySource
  );
module.exports = router;
