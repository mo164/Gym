const asyncHandler = require("express-async-handler");
const Exercise = require("./../models/exercicesModel");

exports.trainingProrammes = asyncHandler(async (req, res) => {
  const program = await Exercise.find({
    day: req.body.day,
    system: req.body.system,
  });
  res.status(200).json({
    message: "success",
    result: program.length,
    program,
  });
});
