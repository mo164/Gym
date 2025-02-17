const express = require("express");
const healthyController = require("../controllers/healthyController");
const router = express.Router();

router
  .route("/")
  .post(healthyController.createHealthySource)
  .get(healthyController.getAllHealthySources);

router
  .route("/:id")
  .get(healthyController.getSpecificHealthySource)
  .patch(healthyController.updateHealthySource)
  .delete(healthyController.deleteHealthySource);
module.exports = router;
