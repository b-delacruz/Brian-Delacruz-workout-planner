import { Router } from "express"
import * as workoutCtrl from "../controllers/workouts.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', workoutCtrl.index )
router.get('/new', workoutCtrl.new)
router.post('/', workoutCtrl.create)
router.post('/', isLoggedIn, workoutCtrl.create)
router.get('/:id', workoutCtrl.show)

export {
  router
}