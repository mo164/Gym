const asyncHandler = require("express-async-handler");
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
    result:allMuscles.length,
    allMuscles
  });
});

exports.getSpecificMuscle = asyncHandler(async (req, res) => {
  const muscle = req.params.id;
  const getMuscle = await muscleGroup.findById(muscle);
  res.status(200).json({
    message: 'Muscle found successfully',
    getMuscle
  });
});
