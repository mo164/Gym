const express = require("express");
const protienController = require("../controllers/mainProtienController");
const router = express.Router();

router
  .route("/")
  .post(protienController.createMainProtien)
  .get(protienController.getAllProtiens);

router
  .route("/:id")
  .get(protienController.getSpecificProtien)
  .patch(protienController.updateProtien)
  .delete(protienController.deleteProtien);
module.exports = router;
