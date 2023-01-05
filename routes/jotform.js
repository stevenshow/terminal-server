const { json } = require('express');
const express = require('express');
const router = express.Router();
const JotFormController = require('../controllers/JotFormController');

const jotFormController = new JotFormController();

router.post('/', async (req, res) => {
  jotFormController.InsertSurvey(req.body);
  res.status(200).send(`${req.body?.['name[first]']} thank you for taking the survey!`);
  console.log(req.body);
});

module.exports = router;
