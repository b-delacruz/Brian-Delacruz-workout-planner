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
  Race.find({})
  .then(race => {
    res.render('races/new', {
      title: "Add Race",
      race,
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.daytime = !!req.body.daytime
  Race.create(req.body)
  .then(race => {
    res.redirect('/races')
  })
}

export {
  index,
  newRace as new,
  create,
}