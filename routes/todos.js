import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

router.get('/new', todosCtrl.new)

export {
  router
}
