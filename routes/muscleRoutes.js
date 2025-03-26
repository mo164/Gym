const express = require("express");
const muscleGroup = require("../controllers/muscleGroupController");
const exercisesController = require("../controllers/exercisesController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });
router.use(authController.protect);

router.route("/").get(muscleGroup.getAllMuscles);
router
  .route("/:id")
  .get(muscleGroup.getSpecificMuscle)
  .patch(allowedTo("admin"), muscleGroup.updateSpecificMuscle)
  .delete(allowedTo("admin"), muscleGroup.deleteSpecificMuscle);
router
  .route("/addMuscle")
  .post(
    allowedTo("admin"),
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
