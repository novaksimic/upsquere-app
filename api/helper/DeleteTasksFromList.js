const Task = require("../models/task.model");

let deleteTasksFromLists = _listId => {
    Task.deleteMany({
      _listId
    }).then(() => {
      console.log("Tasks from " + _listId + " were deleted!");
    });
};

exports.module = deleteTasksFromLists;