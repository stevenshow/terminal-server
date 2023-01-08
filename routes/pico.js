const { json } = require('express');
const express = require('express');
const router = express.Router();
const PicoController = require('../controllers/PicoController');

const picoController = new PicoController();

router.post('/humidity', async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send('ok');
  } catch {
    console.error('failed to send humidity data');
  }
});

module.exports = router;
