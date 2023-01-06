const { json } = require('express');
const express = require('express');
const router = express.Router();
const JotFormController = require('../controllers/JotFormController');

const jotFormController = new JotFormController();

router.post('/', async (req, res) => {
  const {
    formID: formId,
    ip,
    ['name[first]']: firstName,
    ['name[last]']: lastName,
    website,
    help: type,
    description,
    typea9: email,
  } = req.body;
  const name = firstName + ' ' + lastName;
  const data = { formId, ip, name, description, type, website, email };
  jotFormController.InsertSurvey(data);
  res.status(200).send(`${req.body?.['name[first]']} thank you for taking the survey!`);
});

module.exports = router;
