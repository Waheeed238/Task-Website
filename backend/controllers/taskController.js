const asyncHandler = require("express-async-handler")
const Task = require("../models/TaskModels")

const AddTask = asyncHandler ( async (req, res) => {
    const { name, description } = req.body
    const tasks = await Task.create({ name, description })
    if(tasks){
        res.status(200).json({ _id: tasks.id, name: tasks.name, description: tasks.description, date: tasks.date})
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

const GetTask = asyncHandler( async (req, res) => {
    const tasks = await Task.find({})
    if(tasks.length > 0){
        res.status(200).json(tasks)
    } else {
        res.status(400).json('No Task found')
    }
})

module.exports = { GetTask, AddTask }