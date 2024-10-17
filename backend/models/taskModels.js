const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Name is required']
    }, 
    description: {
        type: String,
        required: [ true, 'Description is required']
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)