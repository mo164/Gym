const asyncHandler = require("express-async-handler");
const { Bulking } = require("../models/nutrationProgramsModel");
const handlerFunction = require("../utils/mainSources");

exports.createNutrationProgram = handlerFunction.create(Bulking);

exports.getAllNutrationPrograms = handlerFunction.getAll(Bulking);

exports.updateNutrationProgram = handlerFunction.update(Bulking);

exports.getSpecificNutrationProgram = handlerFunction.getById(Bulking);

exports.deleteNutrationProgram = handlerFunction.delete(Bulking);

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
