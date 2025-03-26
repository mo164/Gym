const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });
router.use(authController.protect)
router
  .route("/")
  .post(
     authController.allowedTo("admin"),
    exercisesController.addExercises
  )
  .get(exercisesController.getAllExercises);

router
  .route("/top_10")
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
