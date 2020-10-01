const express = require("express");
const path = require("path");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get('/lists/:listId/tasks', taskController.getTasks);
router.get('/lists/:listId/tasks/:taskId', taskController.getTask);
router.post('lists/:listId/task', taskController.postTask);
router.patch('/lists/:listId/tasks/:taskId', taskController.patchTask);
router.delete('/lists/:listId/tasks/:taskId', taskController.deleteTask)

module.exports = router;