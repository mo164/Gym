const asyncHandler = require("express-async-handler");
const uploadMedia = require("./../utils/uploadMedia");
const muscleGroup = require("../models/muscleGroupModel.js");
const handlerFunction = require("../utils/mainSources");

exports.addMuscleGroup = handlerFunction.create(muscleGroup);

exports.getAllMuscles = handlerFunction.getAll(muscleGroup);

exports.getSpecificMuscle = handlerFunction.getById(muscleGroup);

exports.updateSpecificMuscle = handlerFunction.update(muscleGroup);

exports.deleteSpecificMuscle = handlerFunction.delete(muscleGroup);

exports.uploadMusclemedia = uploadMedia.uploadMedia;

exports.resizeImage = asyncHandler(async (req, res, next) => {
  if (!req.files || (!req.files.image && !req.files.video)) {
    return next(new Error("Please upload at least an image or a video"));
  }

  const imageFile = req.files.image?.[0]?.path;
  const videoFile = req.files.video?.[0]?.path;
  if (imageFile || videoFile) {
    req.body.image = imageFile;
    req.body.video = videoFile;
  }

  next();
});
