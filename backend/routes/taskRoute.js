const express = require('express')
const { GetTask, AddTask } = require('../controllers/taskController')
const router = express.Router()

router.post('/addtasks', AddTask)
router.get('/tasks', GetTask)

module.exports = router