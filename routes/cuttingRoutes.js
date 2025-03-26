const express = require("express");
const cuttingController = require("../controllers/cuttingController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect)
router
  .route("/")
  .post(cuttingController.createNutrationProgram)
  .get(cuttingController.getAllNutrationPrograms);

router.route("/gettotal").get(cuttingController.getTotal)

module.exports = router;
