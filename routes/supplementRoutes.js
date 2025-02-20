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
  .patch(supplementController.updateSupplement)
  .delete(supplementController.deleteSupplement);

router.patch(
  "/updatemedia/:id",
  supplementController.uploadSupplementMedia,
  supplementController.resizeImage,
  supplementController.updateSupplement
);
module.exports = router;
