const router = require('express').Router();
const cars = require('./carRoutes');

router.use('/cars', cars);

module.exports = router;