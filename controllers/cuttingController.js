const asyncHandler = require("express-async-handler");
const { Cutting } = require("../models/nutrationProgramsModel");
const mainSources = require("../utils/mainSources");

exports.createNutrationProgram = mainSources.create(Cutting);
exports.getAllNutrationPrograms = mainSources.getAll(Cutting);


exports.getTotal = asyncHandler(async (req, res,next) => {
    const result = await Cutting.aggregate([
      { $unwind: "$meals" },
      { $unwind: "$meals.items" },
  
      {
        $group: {
          _id: null,
          totalSthermal: { $sum: "$meals.items.sthermal" },
          totalProtien: { $sum: "$meals.items.protien" },
          totalCarb: { $sum: "$meals.items.carb" },
          totalfats: { $sum: "$meals.items.fat" },
        },
      },
    ]);
    res.status(200).json({
      message: "Success",
      totals: result,
    });
  });
  