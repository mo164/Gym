const asyncHandler = require("express-async-handler");
const { Protien, Carb }  = require("../models/baseModel");
const appErorr = require("./../utils/appError");
exports.createMainProtien = asyncHandler(async (req, res) => {
  const protiens = await Protien.create({
    name: req.body.name,
    sthermal: req.body.sthermal,
    protien: req.body.protien,
    carp: req.body.carp,
    fat: req.body.fat,
  });
  res.status(201).json({
    message: "success",
    result: protiens.length,
    protiens,
  });
});

exports.getAllProtiens = asyncHandler(async (req, res) => {
  const allProtiens = await Protien.find();
  res.status(200).json({
    message: "success",
    results: allProtiens.length,
    allProtiens,
  });
});

exports.updateProtien = asyncHandler(async (req, res) => {
  const UpdateProtien = await Protien.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!UpdateProtien) {
    return next(new appErorr("no document found with this id", 404));
  }
  res.status(200).json({
    message: "success",
    UpdateProtien,
  });
});

exports.getSpecificProtien = asyncHandler(async (req, res) => {
  const protien = await Protien.findById(req.params.id);
  if (!protien) {
    return next(new appErorr("no document found with this id", 404));
  }
  res.status(200).json({
    message: "success",
    protien,
  });
});

exports.deleteProtien = asyncHandler(async (req, res) => {
  const protien = await Protien.findByIdAndDelete(req.params.id);
  if (!protien) {
    return next(new appErorr("no document found with this id", 404));
  }
  res.status(200).json({
    message: " delete successfully",
  });
});
