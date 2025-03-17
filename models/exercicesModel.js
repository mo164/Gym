const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  video: String,
  muscleGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MuscleGroup",
    required: true,
  },
  mistakes: [String],
  targetMuscle: [String],
  primaryMuscle: [String],
  secondaryMuscle: [String],
  instructions: [String],
  sets: Number,
  reps: String,
  category: {
    type: String,
    enum: ["Explore by Muscle", "Explore by System", "Cardio"],
  },
  top10: {
    type: Boolean,
    default: false,
  },
  day: String,
  system: String,
});

exerciseSchema.pre(/^find/, function (next) {
  this.populate({
    path: "muscleGroup",
    select: "name _id  image",
  });
  next();
});

module.exports = mongoose.model("Exercise", exerciseSchema);
