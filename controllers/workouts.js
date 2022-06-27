import { Workout } from "../models/workout.js"

function index (req,res) {
  console.log("This Works")
  res.render('workouts/index', {
    title: "Workouts",
    user: req.user,
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newWorkout (req, res) {
  console.log('Getting There')
  res.render('workouts/new', {
    title: "Add Workout",
  })
}

function create (req, res) {
  console.log('So Close!')
}

export {
  index,
  newWorkout as new,
  create,
}