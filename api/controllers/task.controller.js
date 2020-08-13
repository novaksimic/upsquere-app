const Task = require("../models/task.model");
const TaskList = require("../models/taskList.model");
const bodyparser = 

exports.getTasks = (req, res, next) => {

    Task.find()
        .then(tasks => {
           res.status(200).send(tasks);
        }).catch(err => {
            console.log(err);
        });
}

exports.getLists = (req, res, next) => {

    TaskList.find()
        .then(tasklists => {
           res.status(200).send(tasklists);
        }).catch(err => {
            console.log(err);
        });
}

exports.postList = (req, res, next) => {

    let id = req.params.id;
    let title = req.body.title;
    let userId = req.body.userId;

    let newTaskList = new TaskList({
            id,
            title,
            userId
        });
    newTaskList.save().then(listDoc => {
        res.send(listDoc);
    }).catch(err => {
        console.log(err);
    })
}