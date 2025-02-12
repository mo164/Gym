const asyncHandler = require("express-async-handler");
const utils = require("./../utils/utils");
exports.Calculate = asyncHandler(async (req, res) => {
  const userData = {
    gender: req.body.gender,
    age: Number(req.body.age),
    weight: Number(req.body.weight),
    height: Number(req.body.height),
    bodyFat: req.body.bodyFat,
    goal: req.body.goal,
    proteinQuantity: req.body.proteinQuantity,
    activityLevel: req.body.activityLevel,
    stepsNumber: Number(req.body.stepsNumber),
  };

  // Check if all required fields are valid numbers
  if (
    isNaN(userData.age) ||
    isNaN(userData.weight) ||
    isNaN(userData.height) ||
    isNaN(userData.stepsNumber)
  ) {
    return res.status(400).json({
      status: "error",
      message:
        "Please provide valid numbers for age, weight, height, and stepsNumber.",
    });
  }

  const bmr = utils.calculateBMR(
    userData.weight,
    userData.height,
    userData.age,
    userData.gender
  );
  const tdee = utils.calculateTDEE(
    bmr,
    userData.activityLevel,
    userData.stepsNumber
  );
  const neededCalories = utils.adjustCalories(tdee, userData.goal);
  const protein = utils.calculateProtein(
    userData.weight,
    userData.proteinQuantity
  );
  const { carbs, fats } = utils.calculateMacros(neededCalories);
  const neededWater = utils.calculateWaterIntake(userData.weight);

  res.json({
    calories: bmr.toFixed(2),
    neededCalories: neededCalories.toFixed(2),
    protein: protein.toFixed(2),
    carbohydrates: carbs.toFixed(2),
    fats: fats.toFixed(2),
    neededWater: neededWater.toFixed(2),
  });
});
