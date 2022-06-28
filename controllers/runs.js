import { Run } from "../models/runs.js"

function index (req,res) {
  Run.find({})
  .then(runs => {
    res.render('runs/index', {
      title: "Runs",
      user: req.user,
      runs,
      
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newRun (req, res) {
  res.render('runs/new', {
    title: "New Run",
  })
}

function create (req, res) {
  req.body.owner = req.user.profile._id
  Run.create(req.body)
  .then(run => {
    res.redirect('/runs')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/runs')
  })
}


// function show(req, res) {
//   Workout.findById(req.params.id)
//   .populate('owner')
//   .then(workout => {
//     res.render('todos/new', {
//       title: "Workout Details",
//       workout: workout,
//     })
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/')
//   })
// }

export {
  index,
  newRun as new,
  create,
  // show,
}
