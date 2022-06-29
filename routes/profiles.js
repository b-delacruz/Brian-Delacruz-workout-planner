import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', profilesCtrl.show)
router.post('/:id/comments', isLoggedIn, profilesCtrl.createComment)
router.delete('/comments/:id', isLoggedIn, profilesCtrl.delete)


export {
  router
}
