const express = require("express");
const carbController = require("../controllers/carbController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);
router
  .route("/")
  .post(authController.allowedTo("admin"), carbController.createCarbSource)
  .get(carbController.getAllCarbSources);

router
  .route("/:id")
  .get(carbController.getSpecificcarbSource)
  .patch(authController.allowedTo("admin"), carbController.updatecarbSource)
  .delete(authController.allowedTo("admin"), carbController.deletecarbSource);
module.exports = router;
