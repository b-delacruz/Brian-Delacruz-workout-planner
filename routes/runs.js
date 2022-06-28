import { Router } from "express"
import * as runCtrl from "../controllers/runs.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', runCtrl.index )
router.get('/new', runCtrl.new)
router.post('/', isLoggedIn, runCtrl.create)
router.get('/:id', runCtrl.show)
router.patch('/:id/easy-run', isLoggedIn, runCtrl.easyRun)



export {
  router
}