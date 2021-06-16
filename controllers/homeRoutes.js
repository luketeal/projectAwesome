const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, Races, Users } = require('../models');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
});


module.exports = router;