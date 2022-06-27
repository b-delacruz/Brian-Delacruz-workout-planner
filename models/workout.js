import mongoose from "mongoose"

const Schema = mongoose.Schema

const goalSchema = new Schema({
  goal: String,
  date: Date,
}, {
  timestamps: true,
})

const workoutSchema = new Schema({
  type: String,
  name: String,
  description: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  goal: [goalSchema],
}, {
  timestamps: true,
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout,
}