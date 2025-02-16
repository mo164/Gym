const mongoose = require("mongoose");
const ProtienSchema = new mongoose.Schema({
  name: String,
  sthermal: Number,
  protien: Number,
  carp: Number,
  fat: Number,
});

module.exports = mongoose.model("Protien", ProtienSchema);
