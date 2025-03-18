const asyncHandler = require("express-async-handler");
const {BroSplit} = require("../models/trainingProgrammesModel");
const handlerFunction = require("../utils/mainSources");

exports.addtrainingProramme = handlerFunction.create(BroSplit);
exports.getAlltrainingProrammes = handlerFunction.getAll(BroSplit);

// exports.addtrainingProramme = asyncHandler(async (req, res) => {
//   const program = await BroSplit.create({
//     name: req.body.name,
//     day: req.body.day,
//     muscles: req.body.muscles,
//     exercises: req.body.exercises
//   });

//   res.status(200).json({
//     message: "success",
//     result: program.length,
//     program,
//   });
// });

// exports.getAlltrainingProrammes = asyncHandler(async (req, res, next) => {

// })