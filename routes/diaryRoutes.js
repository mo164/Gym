const express = require("express");
const diaryController = require("../controllers/diaryController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);
router
  .route("/")
  .post(authController.allowedTo("admin"), diaryController.createDiarySource)
  .get(diaryController.getAllDiarySources);

router
  .route("/:id")
  .get(diaryController.getSpecificDiarySource)
  .patch(authController.allowedTo("admin"), diaryController.updateDiarySource)
  .delete(authController.allowedTo("admin"), diaryController.deleteDiarySource);
module.exports = router;
