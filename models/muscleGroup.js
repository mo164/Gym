const mongoose = require("mongoose");
const muscleGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

module.exports = mongoose.model("MuscleGroup", muscleGroupSchema);
