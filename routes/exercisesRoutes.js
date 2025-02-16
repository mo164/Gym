const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(exercisesController.addExercises)
  .get(exercisesController.getAllExercises);

router
  .route("/top_10")
  .post(exercisesController.addTop10)
  .get(exercisesController.getTop10);

//router.route("/:day").get(exercisesController.exploreBySystem);
router.route("/:id").get(exercisesController.getSpecificExercise);

//router.route('/Explore by Muscle').get(exercisesController.exploreByMuscle)
module.exports = router;
