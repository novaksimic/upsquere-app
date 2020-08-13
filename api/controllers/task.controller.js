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

exports.postTask = (req, res, next) => {

    let title = req.body.title;
    let listId = req.params.id;

    TaskList.findOne({
        id: req.params.listId,
        userId: req.user.id
    })
    .then(list => {
        if(list) {
            let newTask = new Task({
                title,
                listId
            });
        newTask.save().then(newTaskDoc => {
            return res.send(newTaskDoc)
        })
        } else {
            return res.sendStatus(404);
        }        
    });
}

exports.patchTask = (req, res, next) => {

    // Update partial task by id 
    let listId = req.params.listId;
    let userId = req.user.id;

    let taskId = req.params.taskId;

    TaskList.findOne({
        id: listId,
        userId
    })
    .then(list => {
        if(list) {
            Task.findOneAndUpdate({
                id: taskId,
                listid
            }, {$set: req.body})
            .then(() => {
                res.send({message: "Updated successfully"});
            })
        }
        res.sendStatus(404);
    });
}

exports.deleteTask = (req, res, next) => {

    let taskId = req.params.taskId;
    let listId = req.params.listId;
    let userId = req.user.id;

    TaskList.findOne({
        id: listId,
        userId
    })
    .then(list => {
        if(list) {
            Task.findOneAndRemove({
                id: taskId,
                listId
            })
            .then(removedTask => {
                return res.send(removedTask);
            })
            .catch(err => {
                console.log(err);
            })
        }
        return res.sendStatus(404);
    });
}

