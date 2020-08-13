const express = require("express");
const path = require("path");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.get('/lists', taskController.getLists);
router.post('/list', taskController.postList);

module.exports = router;