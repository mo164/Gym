const express = require("express");
const bulkController = require("../controllers/bulkProgramController");
const router = express.Router();

router
  .route("/")
  .post(bulkController.createNutrationProgram)
  .get(bulkController.getAllNutrationPrograms);

router
  .route("/:id")
  .get(bulkController.getSpecificNutrationProgram)
  .patch(bulkController.updateNutrationProgram)
  .delete(bulkController.deleteNutrationProgram);
module.exports = router;
