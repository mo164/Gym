const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(
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
  .patch(exercisesController.updateExercise)
  .delete(exercisesController.deleteExercise);

  router
  .patch(
    "/updatemedia/:id",  
    exercisesController.uploadExerciseMedia,
    exercisesController.resizeImage,
    exercisesController.updateExercise
  );


  
module.exports = router;
