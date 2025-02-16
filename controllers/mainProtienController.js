const asyncHandler = require("express-async-handler");
const Protien = require("../models/mainProtienModel");

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
