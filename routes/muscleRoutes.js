const express = require("express");
const muscleGroup = require("./../controllers/muscleGroup");
const router = express.Router();

router.route("/addMuscle").post(muscleGroup.addMuscleGroup);

module.exports = router;
