import { Router } from 'express'
import * as racesCtrl from "../controllers/races.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', isLoggedIn, racesCtrl.index)
router.get('/new', isLoggedIn, racesCtrl.new)
router.post('/', racesCtrl.create)
router.delete('/:id', isLoggedIn, racesCtrl.delete)

export {
  router
}