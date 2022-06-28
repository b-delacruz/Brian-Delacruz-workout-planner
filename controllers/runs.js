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


function show(req, res) {
  Run.findById(req.params.id)
  .populate('owner')
  .then(run => {
    res.render('runs/show', {
      title: "Run Details",
      run,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function easyRun(req, res) {
  Run.findById(req.params.id)
  .then(run => {

    run.easy = !run.easy
    run.save()
    .then(() => {
      res.redirect(`/runs/${run._id}`)
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/runs')
  })
}

function edit(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    res.render('runs/edit', {
      title:'Edit Run',
      run,
    })
  })
}

function update(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    if (run.owner.equals(req.user.profile._id)) {
      run.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/runs/${run._id}`)
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/runs')
  })
}

function deleteRun (req, res) {
  Run.findByIdAndDelete(req.params.id)
  .then(run => {
    if (run.owner.equals(req.user.profile._id)) {
      run.delete()
      .then(() => {
        res.redirect('/runs')
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/runs')
  })
}

export {
  index,
  newRun as new,
  create,
  show,
  easyRun,
  edit,
  update,
  deleteRun as delete,
}
