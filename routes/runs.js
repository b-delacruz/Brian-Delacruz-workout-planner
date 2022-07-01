import { Router } from "express"
import * as runCtrl from "../controllers/runs.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', runCtrl.index )
router.get('/new', runCtrl.new)
router.get('/all', runCtrl.allRuns)
router.post('/', isLoggedIn, runCtrl.create)
router.get('/:id', runCtrl.show)
router.patch('/:id/easy-run', isLoggedIn, runCtrl.easyRun)
router.get('/:id/edit', runCtrl.edit)
router.put('/:id', isLoggedIn, runCtrl.update)
router.delete('/:id', isLoggedIn, runCtrl.delete)




export {
  router
}