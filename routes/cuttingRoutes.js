const express = require("express");
const cuttingController = require("../controllers/cuttingController");
const router = express.Router();

router
  .route("/")
  .post(cuttingController.createNutrationProgram)
  .get(cuttingController.getAllNutrationPrograms);

router.route("/gettotal").get(cuttingController.getTotal)

module.exports = router;
