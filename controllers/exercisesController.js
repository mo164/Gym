const asyncHandler = require("express-async-handler");
const Exercise = require("./../models/exercicesModel");
const handlerFunction = require("./../utils/mainSources");
const uploadMedia = require("../utils/uploadMedia");

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
    day: req.body.day,
    system: req.body.system,
    image: req.body.image,
    video: req.body.video,
    mistakes:req.body.mistakes,
    top10: req.body.top10,
  });
  res.status(201).json({
    message: "Success",
    exercise,
  });
});
exports.getSpecificExercise = handlerFunction.getById(Exercise, "muscleGroup");
exports.getAllExercises = handlerFunction.getAll(Exercise);
exports.updateExercise = handlerFunction.update(Exercise);
exports.deleteExercise = handlerFunction.delete(Exercise);
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



exports.getTop10 = asyncHandler(async (req, res) => {
  const top10 = await Exercise.find({ top10: true });

  res.status(200).json({
    message: "success",
    result: top10.length,
    top10,
  });
});

exports.uploadExerciseMedia = uploadMedia.uploadMedia;

exports.resizeImage = asyncHandler(async (req, res, next) => {
  if (!req.files || (!req.files.image && !req.files.video)) {
    return next(new Error("Please upload at least an image or a video"));
  }

  const imageFile = req.files.image?.[0]?.path;
  const videoFile = req.files.video?.[0]?.path;
  if (imageFile||videoFile) {
    req.body.image = imageFile,
    req.body.video = videoFile
     
  }
  next();
});
