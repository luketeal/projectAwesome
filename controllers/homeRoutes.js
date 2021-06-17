const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Car, Race, User, Entry } = require('../models');

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
  try 
  {
    // Get all Race data
    const raceData = await Race.findAll();
    const races = raceData.map((race) => race.get({ plain: true }));
    // console.log(races)
    res.render('homepage', {
        races, 
        logged_in: req.session.logged_in
    });
  } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

router.get('/garage', async (req, res) => {
  
    res.render('garage');
});

router.get('/race/:id', async (req, res) => {
    try 
  {
    // Get Race data
    const raceData = await Race.findByPk(req.params.id,
        {
            include:
            [
                {
                    model: Car, 
                    through: Entry, 
                    as: 'race_car',
                    attributes: ['make', 'model', 'horsepower', 'topSpeed', 'acceleration', 'user_id'],
                    include: [{model: User, attributes: ['name']}]
                }
            ]
        }
    );
    const race = raceData.get({ plain: true });
    console.log(race)
    res.render('race', {
        race, 
        logged_in: req.session.logged_in
    });
  } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

module.exports = router;