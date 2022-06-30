import mongoose from "mongoose"

const Schema = mongoose.Schema

const goalSchema = new Schema({
  goal: String,
  date: {
    type: Date,
    default: function() {
      const today = new Date()
      return today
    }
  }
}, {
  timestamps: true,
})

const runSchema = new Schema({
  date: Date,
  distance: Number,
  time: Number,
  city: String,
  state: String,
  easy: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  goal: [goalSchema],
}, {
  timestamps: true,
})

const Run = mongoose.model('Run', runSchema)

export {
  Run,
}