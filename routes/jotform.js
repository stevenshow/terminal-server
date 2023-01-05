const { json } = require('express');
const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardController');

const cardController = new CardController();

router.post('/', async (req, res) => {
  res.status(200).send(req.body[first]);
  console.log(req.body);
});

module.exports = router;
