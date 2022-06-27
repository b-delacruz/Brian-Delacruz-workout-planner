import { Router } from "express"
import * as workoutCtrl from "../controllers/workouts.js"

const router = Router()

router.get('/', workoutCtrl.index )

export {
  router
}