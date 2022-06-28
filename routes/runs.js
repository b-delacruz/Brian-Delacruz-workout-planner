import { Router } from "express"
import * as runCtrl from "../controllers/runs.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', runCtrl.index )
router.get('/new', runCtrl.new)
router.post('/', runCtrl.create)
router.post('/', isLoggedIn, runCtrl.create)



export {
  router
}