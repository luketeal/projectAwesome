const path = require('path'); // will keep
const express = require('express'); // done
const session = require('express-session'); // done
const exphbs = require('express-handlebars'); // done
const routes = require('./controllers'); // will keep
var env = require('dotenv') // done
const helpers = require('./utils/helpers');

const bcrypt = require('bcrypt'); // --> not needed here?
const passport = require('passport')  // done

const sequelize = require('./config/connection'); // done
// const SequelizeStore = require('connect-session-sequelize')(session.Store);  -->not used right now 

const app = express(); // done
const PORT = process.env.PORT || 3001; // will keep

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// -----------------------initailizePassport --------------------------
// const initializePassport = require('./config/passport-config')
// initializePassport(
//     passport, 
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )
// --------------------------------------------------------------------


// const hbs = exphbs.create();// done

// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // done

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);// done
app.set('view engine', 'handlebars');// done

app.use(express.json()); // done
app.use(express.urlencoded({ extended: true })); // done
app.use(express.static(path.join(__dirname, 'public'))); // will keep

app.use(routes); // will keep

// ------------------------------passport code start------------------------
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

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






// const connection = mysql.createConnection({
//     host: 'localhost',
  
//     // Your port; if not 3306
//     port: 3306,
  
//     // Your username
//     user: 'root',
  
//     // Your password
//     password: '',
//     database: 'paddock_db',
//   });

  