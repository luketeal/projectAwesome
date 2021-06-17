const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, Races, Users } = require('../models');

router.get('/login', async (req, res) => {
  
    res.render('login');
});

router.get('/logout', async (req, res) => {
  
    res.render('logout');
});

router.get('/signup', async (req, res) => {
  
    res.render('signup');
});

router.get('/', async (req, res) => {
  
    res.render('homepage');
});

router.get('/garage', async (req, res) => {
  
    res.render('garage');
});

router.get('/race', async (req, res) => {
  
    res.render('race');
});

module.exports = router;