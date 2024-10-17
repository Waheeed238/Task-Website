const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb+srv://admin:admin@waheedcluster.g3keq.mongodb.net/TaskMern')
app.use('/authentication', require('./routes/userRoute'))
app.use('/', require('./routes/taskRoute'))

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})