const asyncHandler = require("express-async-handler");
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
  
    // Function to calculate BMR
    const calculateBMR = (weight, height, age, gender) => {
      if (gender === "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
      }
    };
  
    // 2. Calculate TDEE
    const calculateTDEE = (bmr, activityLevel, steps) => {
      const activityFactor = {
        low: 1.2,
        medium: 1.55,
        high: 1.9,
      }[activityLevel];
  
      const stepFactor = steps > 10000 ? 1.2 : steps > 5000 ? 1.1 : 1.0;
      return bmr * activityFactor * stepFactor;
    };
  
    // 3. Adjust Calories Based on Goal
    const adjustCalories = (tdee, goal) => {
      if (goal === "lose weight") return tdee - 500;
      if (goal === "gain weight") return tdee + 500;
      return tdee;
    };
  
    // 4. Calculate Protein Intake
    const calculateProtein = (weight, proteinLevel) => {
      return proteinLevel === "high" ? weight * 2 : weight * 1.2;
    };
  
    // 5. Calculate Carbs and Fats
    const calculateMacros = (calories) => {
      const carbs = (calories * 0.50) / 4;
      const fats = (calories * 0.30) / 9;
      return { carbs, fats };
    };
  
    // 6. Calculate Daily Water Intake
    const calculateWaterIntake = (weight) => {
      return (weight * 35) / 1000; // Convert to Liters
    };
  
    const bmr = calculateBMR(
      userData.weight,
      userData.height,
      userData.age,
      userData.gender
    );
    const tdee = calculateTDEE(bmr, userData.activityLevel, userData.stepsNumber);
    const neededCalories = adjustCalories(tdee, userData.goal);
    const protein = calculateProtein(userData.weight, userData.proteinQuantity);
    const { carbs, fats } = calculateMacros(neededCalories);
    const neededWater = calculateWaterIntake(userData.weight);
  
    
    res.json({
      calories: bmr.toFixed(2),
      neededCalories: neededCalories.toFixed(2),
      protein: protein.toFixed(2),
      carbohydrates: carbs.toFixed(2),
      fats: fats.toFixed(2),
      neededWater: neededWater.toFixed(2),
    });
  });
  