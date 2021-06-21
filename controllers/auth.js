var authController = require('./authcontroller.js');
const { Car, Race, User, Entry } = require('../models');

module.exports = function (app, passport) {

    app.get('/', isLoggedIn, function (req, res) {

        res.redirect('/homepage');

    });

    //remove this reference that doesnt go anywhere. it was confused.
    //I had a little trouble reading this


    // app.get('/garage', isLoggedIn, function (req, res) {
    //     res.redirect('/garage');
    // });


    app.get('/signup', authController.signup);

    app.get('/login', authController.login);

    app.post('/signup', passport.authenticate('local-signup', {
        //changed this vv
        successRedirect: '/garage',
        failureRedirect: '/signup'
    }
    ));

    app.get('/homepage', isLoggedIn, authController.homepage);

    app.get('/logout', authController.logout)

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/homepage',
        failureRedirect: '/login'
    }
    ));

    app.get('/race/:id', async (req, res) => {
        try {
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
                                include: [{ model: User, attributes: ['name'] }]
                            }
                        ]
                }
            );
            const race = raceData.get({ plain: true });
            res.render('race', {
                race,
                logged_in: req.session.logged_in
            });
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    });

    app.get('/garage', isLoggedIn, authController.garage)


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }

}