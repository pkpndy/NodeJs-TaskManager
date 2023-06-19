
const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

const createTask = (req,res) => {
    //this is post so what ever we post is sent through body
    res.json(req.body)
}

const getTask = (req,res) => {
    // we use req.params for getting specific id from URL
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = (req,res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks, createTask,updateTask,getTask,deleteTask
}