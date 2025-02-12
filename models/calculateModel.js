const mongoose = require("mongoose");
const calculateSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    bodyFat: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      enum: ["lose weight", "maintain weight", "gain weight"],
      required: true,
    },
    proteinQuantity: {
      type: String,
      enum: ["high", "low"],
      required: true,
    },
    activityLevel: {
      type: String,
      enum: ["high", "low", "medium"],
      required: true,
    },
    stepsNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Calculate = mongoose.model("Calculate", calculateSchema);

module.exports = Calculate;
