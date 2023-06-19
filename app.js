const connnectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.json()) // it passes data sent into req.body

//routes
app.get('/hello', (req, res) => {
    res.send("just having fun")
})
const port = 3000

app.use('/api/v1/tasks', tasks)

const start = async() => {
    try {
        await connnectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening at port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
