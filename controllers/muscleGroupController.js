const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const uploadImage = require("./../utils/uploadImages.js");
const muscleGroup = require("../models/muscleGroupModel.js");
const handlerFunction = require("../utils/mainSources");

exports.addMuscleGroup = handlerFunction.create(muscleGroup);

exports.getAllMuscles = handlerFunction.getAll(muscleGroup);

exports.getSpecificMuscle = handlerFunction.getById(muscleGroup);

exports.updateSpecificMuscle = handlerFunction.update(muscleGroup);

exports.deleteSpecificMuscle = handlerFunction.delete(muscleGroup);

exports.uploadMuscleImage = uploadImage.uploadSingleImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new Error("No file uploaded"));
  }

  const imageUrl = req.file.path.replace(
    "/upload/",
    "/upload/w_100,h_148,c_crop/"
  );
  req.body.image = imageUrl;

  next();
});
