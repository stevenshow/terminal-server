const router = require('express').Router();

router.use('/', require('./index'));
router.use('/cards', require('./cards'));
router.use('/deploy', require('./deploy'));

module.exports = router;
