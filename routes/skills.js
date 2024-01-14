import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()


// GET localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// POST localhost:3000/skills/create
router.post('/', skillsCtrl.create)

// GET localhost:3000/skills/
router.get('/:skillId', skillsCtrl.show)

// DELETE localhost:3000/skills/skillId
router.delete('/:skillId', skillsCtrl.delete)

export { router }
