const router = require('express').Router();

router.use('/', require('./index'));
router.use('/cards', require('./cards'));
router.use('/products', require('./products'));
router.use('/deploy', require('./deploy'));
router.use('/jotform', require('./jotform'));
router.use('/pico', require('./pico'));
router.use('/task', require('./task.js'));

module.exports = router;
