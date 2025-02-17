const mongoose = require("mongoose");
const BaseSchema = new mongoose.Schema({
  name: String,
  sthermal: Number,
  protien: Number,
  carp: Number,
  fat: Number,
});

const BaseModel = mongoose.model("Base", BaseSchema);
const Protien = mongoose.model("Protien", BaseSchema);
const Carb = mongoose.model("Carb", BaseSchema);
module.exports = { Protien, Carb };
