const express = require("express");
const supplementController = require("../controllers/supplementController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

router
  .route("/")
  .post(
    authController.allowedTo("admin"),
    supplementController.uploadSupplementMedia,
    supplementController.resizeImage,
    supplementController.createSupplement
  )
  .get(supplementController.getAllSupplements);

router
  .route("/:id")
  .get(supplementController.getSpecificSupplement)
  .patch(
    authController.allowedTo("admin"),
    supplementController.updateSupplement
  )
  .delete(
    authController.allowedTo("admin"),
    supplementController.deleteSupplement
  );

router.patch(
  "/updatemedia/:id",
  authController.allowedTo("admin"),
  supplementController.uploadSupplementMedia,
  supplementController.resizeImage,
  supplementController.updateSupplement
);
module.exports = router;
