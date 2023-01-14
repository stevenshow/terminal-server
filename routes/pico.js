const { json } = require('express');
const express = require('express');
const router = express.Router();
const PicoController = require('../controllers/PicoController');

const picoController = new PicoController();

router.post('/humidity', async (req, res) => {
  try {
    picoController.InsertReading(req.body);
    res.status(200).send('ok');
  } catch {
    console.error('failed to send humidity data');
  }
});

router.get('/humidity', async (req, res) => {
  try {
    res.status(200).send(picoController.GetLastReading());
  } catch (err) {
    console.error('failed to get last humidity data');
  }
});

module.exports = router;
