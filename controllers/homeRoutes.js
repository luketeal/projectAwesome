const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, Races, Users } = require('../models');

router.get('/login', async (req, res) => {


    res.render('login');
});
