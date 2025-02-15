const asyncHandler = require("express-async-handler");
const Exercise = require("./../models/exercicesModel");

exports.addExercises = asyncHandler(async (req, res, next) => {
  const exercise = await Exercise.create({
    name: req.body.name,
    muscleGroup: req.body.muscleGroup,
    targetMuscle: req.body.targetMuscle,
    primaryMuscle: req.body.primaryMuscle,
    secondaryMuscle: req.body.secondaryMuscle,
    instructions: req.body.instructions,
    sets: req.body.sets,
    reps: req.body.reps,
    category: req.body.category,
  });
  res.status(201).json({
    message: "Success",
    exercise,
  });
});

exports.getSpecificExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id).populate(
    "muscleGroup"
  );
  res.status(200).json({
    message: "Success",
    exercise,
  });
});

exports.getAllExercisesOnSpecificMuscle = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find({
    muscleGroup: req.params.muscleId,
  });
  res.status(200).json({
    message: "Success",
    result: exercises.length,
    exercises,
  });
});

exports.getAllExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find();
  res.status(200).json({
    message: "Success",
    result: exercises.length,
    exercises,
  });
});

exports.addTop10 = asyncHandler(async (req, res) => {
  const top10 = await Exercise.create({
    name: req.body.name,
    targetMuscle: req.body.targetMuscle,
    primaryMuscle: req.body.primaryMuscle,
    secondaryMuscle: req.body.secondaryMuscle,
    instructions: req.body.instructions,
    sets: req.body.sets,
    reps: req.body.reps,
    top10: req.body.top10,
  });
  res.status(201).json({
    message: 'created successfully',
    top10
  })
});

exports.getTop10 = asyncHandler(async (req, res) => {
  const top10 = await Exercise.find({top10:true});

  res.status(200).json({
    message: 'success',
    result: top10.length,
    top10
  })
})