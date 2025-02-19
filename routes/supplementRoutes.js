const express = require("express");
const supplementController = require("../controllers/supplementController");
const router = express.Router();

router
  .route("/")
  .post(
    supplementController.uploadSupplementMedia,
    supplementController.resizeImage,
    supplementController.createSupplement
  )
  .get(supplementController.getAllSupplements);

router
  .route("/:id")
  .get(supplementController.getSpecificSupplement)
  .patch(
    supplementController.uploadSupplementMedia,
    supplementController.resizeImage,
    supplementController.updateSupplement
  )
  .delete(supplementController.deleteSupplement);
module.exports = router;
