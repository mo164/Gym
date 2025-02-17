// Function to calculate BMR
// Function to calculate BMR using Body Fat Percentage
exports.calculateBMR = (weight, height, age, gender, bodyFat) => {
  if (bodyFat) {
    // Using Katch-McArdle Formula
    const leanBodyMass = weight * (1 - bodyFat / 100);
    return 370 + (21.6 * leanBodyMass);
  } else {
    // Using Mifflin-St Jeor Formula
    if (gender === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }
};

// 2. Calculate TDEE
exports.calculateTDEE = (bmr, activityLevel, steps) => {
  const activityFactor = {
    low: 1.2,
    medium: 1.55,
    high: 1.725,
  }[activityLevel];
  

  const stepFactor = steps > 10000 ? 1.1 : steps > 5000 ? 1.05 : 1.0;
  return bmr * activityFactor * stepFactor;
};

// 3. Adjust Calories Based on Goal
exports.adjustCalories = (tdee, goal) => {
  if (goal === "lose weight") return tdee - 500;
  if (goal === "gain weight") return tdee + 500;
  return tdee;
};

// 4. Calculate Protein Intake
exports.calculateProtein = (weight, proteinLevel) => {
  return proteinLevel === "high" ? weight * 2 : weight * 1;
};

// 5. Calculate Carbs and Fats
exports.calculateMacros = (calories) => {
  const carbs = (calories * 0.5) / 4;
  const fats = (calories * 0.3) / 9;
  return { carbs, fats };
};

// 6. Calculate Daily Water Intake
  exports.calculateWaterIntake = (weight, activityLevel) => {
    let water = (weight * 35) / 1000;
    if (activityLevel === "high") water += 0.5;
    return water;
  };
  

