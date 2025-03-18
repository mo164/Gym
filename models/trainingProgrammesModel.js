const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  name: String,
  day: String,
  muscles: [String],
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});
trainingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "exercises",
    //select: "name _id  image",
  });
  next();
});
const BroSplit = mongoose.model("BroSplit", trainingSchema);
const BushPullLegs = mongoose.model("BushPullLegs", trainingSchema);
const ArnoldSplit = mongoose.model("ArnoldSplit", trainingSchema);

module.exports = { BroSplit, BushPullLegs, ArnoldSplit };
