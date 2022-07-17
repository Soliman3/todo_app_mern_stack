// create routes with express....

const express = require('express');
const router = express.Router();
const Task = require('../models/taskSchema');


// Router for posting new task and save in the body of Schema.....
router.post('/', async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})

// Router for getting all tasks from Schema.....
router.get('/', async (req, res)=>{
    try {
        const tasks = await Task.find(); // to find all from Schema.....
        res.send(tasks);
    } catch (error) {
        res.send(error)
    }
})

// Router for Get task by id and then update it in Schema....
router.put('/:id', async (req, res)=>{
    try {
        const task = await Task.findOneAndUpdate({_id:req.params.id}, req.body)
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})

// Router for Get task by id and then Delete it from Schema.....
router.delete('/:id', async (req, res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error)
    }
})

modules.exports = router;