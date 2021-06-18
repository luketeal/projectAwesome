var authController = require('./authcontroller.js');
 
module.exports = function(app, passport) {

    app.get('/',isLoggedIn,function(req, res) {
 
        res.redirect('/homepage');
     
    });
 
    app.get('/signup', authController.signup);

    app.get('/login', authController.login);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/homepage',
        failureRedirect: '/signup'
    }
    ));

    app.get('/homepage',isLoggedIn, authController.homepage);

    app.get('/logout',authController.logout)

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/homepage',
        failureRedirect: '/login'
    }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())         
            return next();            
        res.redirect('/login');    
    }

}