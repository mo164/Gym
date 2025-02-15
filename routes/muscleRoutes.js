const express = require("express");
const muscleGroup = require("../controllers/muscleGroupController");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router({ mergeParams: true });
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

// {{URL}}/api/musscles/674624ec579e0e05293146f5/exercises
router
  .route("/:muscleId/exercises")
  .get(exercisesController.getAllExercisesOnSpecificMuscle);

module.exports = router;
