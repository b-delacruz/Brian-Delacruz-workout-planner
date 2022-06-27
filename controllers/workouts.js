import { Workout } from "../models/workout.js"

function index (req,res) {
  console.log("This Works")
  Workout.find({})
  .then(workouts => {
    res.render('workouts/index', {
      title: "Workouts",
      user: req.user,
      workouts,
    })
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
  req.body.owner = req.user.profile._id
  Workout.create(req.body)
  .then(workout => {
    res.redirect('/workouts')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/workouts')
  })
}

function show(req, res) {
  Workout.findById(req.params.id)
  .populate('owner')
  .then(workout => {
    res.render('workouts/show', {
      title: "Workout Details",
      workout: workout,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function addGoal(req, res) {
  console.log('ADD GOAL')
}

export {
  index,
  newWorkout as new,
  create,
  show,
  addGoal,
}
