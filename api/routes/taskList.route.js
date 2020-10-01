const express = require("express");
const path = require("path");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get('/lists', taskController.getLists);
router.get('/lists/:id', taskController.getList)
router.post('/list', taskController.postList);
router.patch('/lists/:id', taskController.patchList);
router.delete('/lists/:id', taskController.deleteList);

module.exports = router;