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
  type: {
    type: String,
    enum: ['Compound', 'Isolation'], // مركب أو عزل
    required: true
  },
  equipment: {
    type: String,
    enum: ['Dumbbell', 'Barbell', 'Machine', 'Bodyweight', 'Cable', 'Other'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  instructions: [String] // خطوات أداء التمرين
});

module.exports = mongoose.model('Exercise', exerciseSchema);
