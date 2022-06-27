import { Workout } from "../models/workout.js"

function index (req,res) {
  console.log("This Works")
  res.render('workouts/index', {
    title: title,
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
}