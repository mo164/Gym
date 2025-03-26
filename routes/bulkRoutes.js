const express = require("express");
const bulkController = require("../controllers/bulkProgramController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect)
router
  .route("/")
  .post(bulkController.createNutrationProgram)
  .get(bulkController.getAllNutrationPrograms);

router.route("/gettotal").get(bulkController.getTotal)

module.exports = router;
