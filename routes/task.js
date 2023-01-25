const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

const taskController = new TaskController();

router.get('/board', async (req, res) => {
  const { BoardId } = req.body;
  res.status(200).send(await taskController.GetBoardItems({ BoardId }));
});

module.exports = router;
