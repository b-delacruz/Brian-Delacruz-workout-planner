import { Workout } from "../models/workout.js"

function newToDo (req, res) {
  Workout.find({})
  .then(workout => {
    res.render('todos/new', {
      title: 'To-Do',
      workout,
    })
  })
}

export{
  newToDo as new,
}