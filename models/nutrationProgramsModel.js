const mongoose = require("mongoose");

const nutraionProgramSchema = new mongoose.Schema({
  name: String,
  meals: [
    {
      names: String,
      items: [
        {
          name: String,
          amount: String,
          sthermal: Number,
          protien: Number,
          carb: Number,
          fat: Number,
        },
      ],
    },
  ],
});

const Nutraion = mongoose.model("Nutraion", nutraionProgramSchema);

module.exports = Nutraion;
