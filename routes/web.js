import express from 'express'
const router = express.Router()
import { compareController } from '../controllers/compareController.js'
import { homeController } from '../controllers/homeController.js'
import { menuController } from '../controllers/menuController.js'
import { aboutController } from '../controllers/aboutController.js'
import { problemSetController, TopicWiseController } from '../controllers/problemSetController.js'
import { getMenu } from '../controllers/getmenuController.js'


router.get('/', homeController)
router.get('/compare/',compareController)
router.get('/menu',getMenu)
router.post('/menu',menuController)
router.get('/about',aboutController)
router.get('/problem',problemSetController)
router.get('/problem/topic',TopicWiseController)
export default router;