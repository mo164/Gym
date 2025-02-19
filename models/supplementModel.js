const mongoose = require("mongoose");

const supplementSchema = new mongoose.Schema({
  name: String,
  photo: String,
  Definition: String,
  Benefits: String,
  dailyRequirement: String,
  Types: String,
  bestTime: String,
  sideEffects: String,
  whoAvoid: String,
});

const Supplement = mongoose.model("Supplement", supplementSchema);

module.exports = Supplement;
