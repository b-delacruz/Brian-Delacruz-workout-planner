

function index(req, res) {
    res.render('profiles/index', {
      profiles, // same as profiles: profiles
      name: req.query.name,
      user: req.user
    })
  }
export {
  index,
}