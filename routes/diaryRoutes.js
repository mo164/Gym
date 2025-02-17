const express = require("express");
const diaryController = require("../controllers/diaryController");
const router = express.Router();

router
  .route("/")
  .post(diaryController.createDiarySource)
  .get(diaryController.getAllDiarySources);

router
  .route("/:id")
  .get(diaryController.getSpecificDiarySource)
  .patch(diaryController.updateDiarySource)
  .delete(diaryController.deleteDiarySource);
module.exports = router;
