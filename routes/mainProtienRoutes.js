const express = require("express");
const protienController = require("../controllers/mainProtienController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

router.route("/").post.authController.allowedTo("admin"),
  protienController.createMainProtien.get(protienController.getAllProtiens);

router
  .route("/:id")
  .get(protienController.getSpecificProtien)
  .patch(authController.allowedTo("admin"), protienController.updateProtien)
  .delete(authController.allowedTo("admin"), protienController.deleteProtien);
module.exports = router;
