const express = require("express");
const muscleGroup = require("../controllers/muscleGroupController");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router({ mergeParams: true });
router.route("/").get(muscleGroup.getAllMuscles);
router
  .route("/:id")
  .get(muscleGroup.getSpecificMuscle)
  .patch(muscleGroup.updateSpecificMuscle)
  .delete(muscleGroup.deleteSpecificMuscle);
router
  .route("/addMuscle")
  .post(
    muscleGroup.uploadMusclemedia,
    muscleGroup.resizeImage,
    muscleGroup.addMuscleGroup
  );

router
  .route("/:muscleId/exercises")
  .get(exercisesController.getAllExercisesOnSpecificMuscle);

router.patch(
  "/updatemedia/:id",
  muscleGroup.uploadMusclemedia,
  muscleGroup.resizeImage,
  muscleGroup.updateSpecificMuscle
);

module.exports = router;
