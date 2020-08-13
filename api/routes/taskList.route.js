const express = require("express");
const path = require("path");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get('/lists', taskController.getLists);
router.post('/list', taskController.postList);
router.post('/lists/:id', taskController.postList);
router.post('/lists/:id', taskController.postList);

module.exports = router;