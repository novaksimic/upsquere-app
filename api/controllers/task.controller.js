const Task = require("../models/task.model");
const TaskList = require("../models/taskList.model");


exports.getTasks = (req, res, next) => {

    let listId = req.params.listId;

    Task.find({
        listId
    })
    .then(tasks => {
           res.status(200).send(tasks);
    }).catch(err => {
            console.log(err);
    });
}

exports.getTask = (req, res, next) => {
    const taskId = req.params.id;
    const listId = req.params.listId

    Task.findOne({
        id: taskId,
        listId
    }).then((task) => {
        res.send(task);
    });
}

exports.postTask = (req, res, next) => {

    let title = req.body.title;
    let listId = req.params.id;

    let newTask = new Task({
        title,
        listId
    });
    newTask.save().then(newTaskDoc => {
            return res.send(newTaskDoc)
    }).catch(err => {
        return res.sendStatus(404);
    });
}

exports.patchTask = (req, res, next) => {

    // Update partial task by id 
    let listId = req.params.listId;
    let userId = req.user.id;

    let taskId = req.params.taskId;

   Task.findOneAndUpdate({
       id: taskId,
       listId,
       userId
   }, {$set: req.body})
    .then(() => {
        res.send({message: "Updated successfully"});
    }).catch(err => {
        res.sendStatus(404);
    });
}

exports.deleteTask = (req, res, next) => {

    let taskId = req.params.taskId;
    let listId = req.params.listId;
    let userId = req.user.id;

    Task.findOneAndRemove({
        id: taskId,
        listId,
        userId
    })
    .then((removedTask) => {
        return res.send(removedTask);
    })
    .catch(err => {
        return res.sendStatus(404);
    });
}

