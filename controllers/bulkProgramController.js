const asyncHandler = require("express-async-handler");
const { Bulking } = require("../models/nutrationProgramsModel");
const mainSources = require("../utils/mainSources");

exports.createNutrationProgram = mainSources.create(Bulking);

exports.getAllNutrationPrograms = mainSources.getAll(Bulking);

exports.updateNutrationProgram = mainSources.update(Bulking);

exports.getSpecificNutrationProgram = mainSources.getById(Bulking);

exports.deleteNutrationProgram = mainSources.delete(Bulking);

exports.getTotal = asyncHandler(async (req, res,next) => {
  const result = await Bulking.aggregate([
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
