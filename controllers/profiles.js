import { Profile } from "../models/profile.js"


function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: "Profiles",
      profiles,
      name: req.query.name,
      user: req.user
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate("comments")
  .exec()
  .then(profile => {
    const ownerName = profile.ownerName
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      profile,
      isSelf,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/profiles')
  })
}

function createComment(req, res) {
  req.body.owner = req.user.profile._id
  Profile.findById(req.params.id)
  .then(profile => {
    profile.comments.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
}

function deleteComment(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    req.user.profile._id = req.params.id
    profile.comments.remove({ _id: req.params.commentId })
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.params.id}`)
      })
  })
  .catch(error => {
    console.log(error)
    res.redirect(`/profiles/${req.params.id}`)
  })
}


export {
  index,
  show,
  createComment,
  deleteComment,
}