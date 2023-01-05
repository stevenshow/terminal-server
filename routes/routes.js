const router = require('express').Router();

router.use('/', require('./index'));
router.use('/cards', require('./cards'));
router.use('/products', require('./products'));
router.use('/deploy', require('./deploy'));
router.use('/jotform', require('./jotform'));

module.exports = router;
