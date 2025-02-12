const asyncHandler = require("express-async-handler");
const muscleGroup = require("./../models/muscleGroup");

exports.addMuscleGroup = asyncHandler(async (req, res) => {
  const add = await muscleGroup.create({
    name: req.body.name,
  });
  res.status(201).json({
    message: "created successfully",
    add
  });
});
