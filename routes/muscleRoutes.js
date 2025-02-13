const express = require("express");
const muscleGroup = require("../controllers/muscleGroupController");
const router = express.Router();
router.route("/").get(muscleGroup.getAllMuscles);
router
  .route("/:id")
  .get(muscleGroup.getSpecificMuscle)
  .patch(
    muscleGroup.uploadBrandImage,
    muscleGroup.resizeImage,
    muscleGroup.updateSpecificMuscle
  );
router.route("/addMuscle").post(muscleGroup.addMuscleGroup);

module.exports = router;
