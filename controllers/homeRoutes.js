const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, Races, Users } = require('../models');

router.get('/login', (req, res) => {
  
    res.render('login');
});

router.get('/logout', (req, res) => {
  
    res.render('logout');
});

router.get('/signup', (req, res) => {
  
    res.render('signup');
});

router.get('/', (req, res) => {
  
    res.render('homepage');
});

router.get('/garage', (req, res) => {
  
    res.render('garage');
});

router.get('/race', (req, res) => {
  
    res.render('race');
});

module.exports = router;