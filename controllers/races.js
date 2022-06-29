import { Race } from "../models/race.js"
import { Profile } from "../models/profile.js"


function index(req, res) {
  Race.find({})
  .then(races => {
    res.render('races/index', {
      title: "Races",
      races,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/races')
  })
}

function newRace(req, res) {
  Profile.findById(req.user.profile._id)
  res.render('races/new', {
    title: "Add Race",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Race.create(req.body)
  .then(race => {
    console.log('REQ BODY', req.body)
    res.redirect('/races', {
      title: "New Race"
    })
  })
}

export {
  index,
  newRace as new,
  create,
}