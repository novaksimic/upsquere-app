const express = require("express");
const path = require("path");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get('/lists/:listId/tasks', taskController.getTasks);
router.post('lists/:listId/task', taskController.postTask);
router.post('/lists/:listId/tasks/:taskId', taskController.patchTask);
router.post('/lists/:listId/tasks/:taskId', taskController.deleteTask)

module.exports = router;