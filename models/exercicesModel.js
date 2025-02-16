// exercise.model.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  muscleGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MuscleGroup',
    required: false
  },
  targetMuscle:[String],
  primaryMuscle:[String],
  secondaryMuscle:[String],
  instructions: [String],
  sets:Number,
  reps:Number,
  category: {
    type: String,
    enum: ['Explore by Muscle', 'Explore by System', 'Cardio'], 
  },
  top10:{
    type:Boolean,
    default: false,
  },
  day:String,
  system:String,
});

exerciseSchema.pre(/^find/, function(next) {
  this.populate({
    path: "muscleGroup",
    select: "name _id ",
  });
  next();
})

module.exports = mongoose.model('Exercise', exerciseSchema);
