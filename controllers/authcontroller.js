var exports = module.exports = {}
const { Car, Race, User, Entry } = require('../models');
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.login = function(req, res) {
 
    res.render('login');
 
}

exports.homepage = async function(req, res) {
 
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
 
}

exports.garage = async function(req, res) {
    console.log(req.user)
    try {
        // Get Car Data
        const carData = await Car.findAll({
            where: {
                user_id: req.user.id
            }, 
            include: [
                {
                    model: Race,
                    through: Entry,
                    as: 'car_race',
                    attributes: ['id', 'title', 'location_town', 'location_state', 'race_date']
                }
    
            ]
        }
        )
        const cars = carData.map((car) => car.get({ plain: true }));
        console.log(cars)
        console.log(cars[0].car_race)
        res.render('garage', {
            cars,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};
    
    

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}