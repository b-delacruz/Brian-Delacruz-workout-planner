import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true,
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  comments: [commentSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
