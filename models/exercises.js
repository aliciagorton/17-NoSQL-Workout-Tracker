const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of Exercise is Required"
  },
  difficulty: {
    type: String,
    trim: true,
    default: "easy",
  },
  description: {
    type: String,
    trim: true,
  }
  });

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;
