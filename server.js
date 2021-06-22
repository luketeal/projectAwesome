const path = require('path'); 
const express = require('express'); 
const session = require('express-session'); 
const exphbs = require('express-handlebars'); 
const routes = require('./controllers'); 
var env = require('dotenv') 
const helpers = require('./utils/helpers');

const bcrypt = require('bcrypt'); 
const passport = require('passport')  

const sequelize = require('./config/connection'); 

const app = express(); 
const PORT = process.env.PORT || 3001; 

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(routes); 

// ------------------------------passport code start------------------------

app.use(passport.initialize())// done
app.use(passport.session())// done
// ------------------------------ passport code end----------------------------

//Models
const { User } = require('./models');// done

//Routes
var authRoute = require('./controllers/auth.js')(app,passport);// done

//load passport strategies
require('./config/passport/passport.js')(passport, User);// done

// done
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http://localhost:3001/'));
});


  
