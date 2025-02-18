const mongoose = require("mongoose");

const nutraionProgramSchema = new mongoose.Schema({
  meals: [
    {
      name: String,
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

const Bulking = mongoose.model("Bulking", nutraionProgramSchema);
const Cutting = mongoose.model("Cutting", nutraionProgramSchema);

module.exports ={Bulking,Cutting};
