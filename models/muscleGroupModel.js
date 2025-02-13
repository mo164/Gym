const mongoose = require("mongoose");
const muscleGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String
});

module.exports = mongoose.model("MuscleGroup", muscleGroupSchema);
