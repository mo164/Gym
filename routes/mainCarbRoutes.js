const express = require("express");
const carbController = require("../controllers/carbController");
const router = express.Router();

router
  .route("/")
  .post(carbController.createCarbSource)
  .get(carbController.getAllCarbSources);

router
  .route("/:id")
  .get(carbController.getSpecificcarbSource)
  .patch(carbController.updatecarbSource)
  .delete(carbController.deletecarbSource);
module.exports = router;
