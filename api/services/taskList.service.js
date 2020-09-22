const taskListModel = require("../models/taskList.model");

exports.getTasksLists = () => {
  try {
    taskListModel.getTasksLists((err, taskList) => {
      if (err) {
        throw err;
      }
      return { success: true, body: taskList };
    }, 10);
  }catch (err) {
    return { success: false, error: err };
  }
};

exports.postTaskList = (taskList) => {
  try {
    taskListModel.addTaskList(taskList, (err, list) => {
      if (err) {
        throw err;
      }
      return { success: true, body: list };
    });
    return {success: true, body: "Task list created"}
  }catch(err) {
    return { success: false, error: err };
  }
}

exports.patchTaskList = (taskList) => {
  try {
    taskListModel.patchTaskList(
      {
        id: taskList.id,
        userId: taskList.userId,
      },
      (err, updatedList) => {
        if (err) {
          throw err;
        }
        return { success: true, body: updatedList };
      });
  } catch (err) {
    return { success: false, error: err };
  }
};

exports.deleteTaskList = (taskList) => {
  try {
    taskListModel.deleteTaskList(
      {
        id: taskList.id,
        userId: taskList.userId,
      },
      (err, taskList) => {
        if (err) {
          throw err;
        }
        return { success: true, body: "Successfuly deleted task list" };
      }
    );
  } catch (err) {
    return { success: false, error: err };
  }
};
