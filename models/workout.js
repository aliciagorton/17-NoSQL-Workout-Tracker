const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Enter a name for workout"]
  },
  exercises: {
    type: Schema.Types.ObjectId,
    ref: "Exercises"
  },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
