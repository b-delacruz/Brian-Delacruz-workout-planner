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
  .then(profile => {
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
  Profile.findById(req.params.id)
  .then(profile => {
    profile.comments.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
}

export {
  index,
  show,
  createComment,

}