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

module.exports = mongoose.model("BroSplit", trainingSchema);
module.exports = mongoose.model("BushPullLegs", trainingSchema);
module.exports = mongoose.model("ArnoldSplit", trainingSchema);
