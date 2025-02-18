const express = require("express");
const bulkController = require("../controllers/bulkProgramController");
const router = express.Router();

router
  .route("/")
  .post(bulkController.createNutrationProgram)
  .get(bulkController.getAllNutrationPrograms);

router.route("/gettotal").get(bulkController.getTotal)

module.exports = router;
