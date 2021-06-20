const router = require('express').Router();
const cars = require('./carRoutes');
const entries = require('./entryRoutes');
const races = require('./raceRoutes');

router.use('/cars', cars);
router.use('/entries', entries);
router.use('/race', races);

module.exports = router;