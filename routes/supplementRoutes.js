const express = require("express");
const supplementController = require("../controllers/supplementController");
const router = express.Router();

router
  .route("/")
  .post(supplementController.createSupplement)
  .get(supplementController.getAllSupplements);

router
  .route("/:id")
  .get(supplementController.getSpecificSupplement)
  .patch(supplementController.updateSupplement)
  .delete(supplementController.deleteSupplement);
module.exports = router;
