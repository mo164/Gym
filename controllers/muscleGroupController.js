const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const uploadImage = require("./../utils/uploadImages.js");
const muscleGroup = require("../models/muscleGroupModel.js");

exports.addMuscleGroup = asyncHandler(async (req, res) => {
  const add = await muscleGroup.create({
    name: req.body.name,
  });
  res.status(201).json({
    message: "created successfully",
    add,
  });
});

exports.getAllMuscles = asyncHandler(async (req, res) => {
  const allMuscles = await muscleGroup.find({});
  res.status(200).json({
    message: " all muscles found",
    result: allMuscles.length,
    allMuscles,
  });
});

exports.getSpecificMuscle = asyncHandler(async (req, res) => {
  const muscle = req.params.id;
  const getMuscle = await muscleGroup.findById(muscle);
  res.status(200).json({
    message: "Muscle found successfully",
    getMuscle,
  });
});

exports.uploadBrandImage = uploadImage.uploadSingleImage("image");
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `muscle-${uuidv4()}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(100, 148)
    .toFormat("jpeg")
    .jpeg({ quality: 95 })
    .toFile(`uploads/muscles/${filename}`);

  // Save image into our db
  req.body.image = `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/muscles/${filename}`;

  next();
});
exports.updateSpecificMuscle = asyncHandler(async (req, res, next) => {
  const user = await muscleGroup.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "update successfully",
    user,
  });
});
