const mongoose = require("mongoose");
const BaseSchema = new mongoose.Schema({
  name: String,
  sthermal: Number,
  protein: Number,
  carb: Number,
  fat: Number,
});

const Protien = mongoose.model("Protien", BaseSchema);
const Carb = mongoose.model("Carb", BaseSchema);
const healthy = mongoose.model("healthy", BaseSchema);
const diary = mongoose.model("diary", BaseSchema);

module.exports = { Protien, Carb , healthy ,diary};
