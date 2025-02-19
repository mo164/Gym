const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(
    exercisesController.uploadExerciseMedia,
    exercisesController.resizeImage,
    exercisesController.addExercises
  )
  .get(exercisesController.getAllExercises);

router
  .route("/top_10")
  .post(exercisesController.addTop10)
  .get(exercisesController.getTop10);

router
  .route("/:id")
  .get(exercisesController.getSpecificExercise)
  .patch(
    exercisesController.uploadExerciseMedia,
    exercisesController.resizeImage,
    exercisesController.updateExercise
  )
  .delete(exercisesController.deleteExercise);

module.exports = router;
