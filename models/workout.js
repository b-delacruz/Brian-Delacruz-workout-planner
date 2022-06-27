import mongoose from "mongoose"

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  type: String,
  name: String,
  description: String,
}, {
  timestamps: true,
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout,
}