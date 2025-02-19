const mongoose = require("mongoose");

const muscleGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String,
});

const MuscleGroup = mongoose.model("MuscleGroup", muscleGroupSchema);
module.exports = MuscleGroup;
