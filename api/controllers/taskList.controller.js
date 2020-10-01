const TaskList = require("../models/taskList.model");
const deleteTasksFromLists = require('../helper/DeleteTasksFromList');

exports.getLists = (req, res, next) => {

    TaskList.find()
        .then(tasklists => {
           res.status(200).send(tasklists);
        }).catch(err => {
            console.log(err);
        });
}

exports.getList = (req, res, next) => {
    
    const listId = req.params.listId;
    
    TaskList.findOne({id: listId}).then((list) => {
        res.status(200).send(list);
    });
}

exports.postList = (req, res, next) => {

    let title = req.body.title;
    let userId = req.body.userId;

    let newTaskList = new TaskList({
            title,
            userId
        });
    newTaskList.save().then(listDoc => {
        res.send(listDoc);
    }).catch(err => {
        console.log(err);
    })
}

exports.patchList = (req, res, next) => {

    let listId = req.params.id;
    let userId = req.userId;

    TaskList.findOneAndUpdate({
        id: listId,
        userId
    }, {$set: req.body})
    .then(() => {
        return res.send({message: "Updated successfuly"});
    })
    .catch(err => {
        console.log(err);
    });
}

exports.deleteList = (req, res, next) => {

    let listId = req.params.id;
    let userId = req.userId;

    TaskList.findOneAndRemove({
        id: listId,
        userId
    })
    .then((deletedListDoc) => {
       
        deleteTasksFromLists(deletedListDoc.id);
        return res.send(deletedListDoc);
    });
}