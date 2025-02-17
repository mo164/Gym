const mongoose = require("mongoose");

const supplementSchema = new mongoose.Schema({
  name: String,
  photo:url,
  
});

const Supplement = mongoose.model("Supplement", supplementSchema);

module.exports = Supplement;

