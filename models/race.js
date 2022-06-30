import mongoose from 'mongoose'

const Schema = mongoose.Schema

const raceSchema = new Schema({
  name: String,
  date: {
    type:Date,
    default: function() {
      const today = new Date()
      return today
    }
  },
  location: String,
  time: Number,
  daytime: Boolean,
  image: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  race: String,
}, {
  timestamps: true,
})


const Race = mongoose.model('Race', raceSchema)

export {
  Race
}
