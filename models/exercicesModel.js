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
    required: true
  },
  targetMuscle:String,
  primaryMuscle:String,
  secondaryMuscle:String,
  instructions: [String],
  sets:Number,
  reps:Number,
  category: {
    type: String,
    enum: ['Explore by Muscle', 'Explore by System', 'Cardio'], 
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
