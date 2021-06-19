const router = require('express').Router();
const cars = require('./carRoutes');
const entries = require('./entryRoutes');

router.use('/cars', cars);
router.use('/entries', entries);

module.exports = router;