// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const port = 3000;
const mongoSessisonStore = require("connect-mongo")(session);
require("dotenv").config();

var User = require("./models/users");

// set view engine for ejs
app.set("view engine", "ejs");

// use DELETE method on a form of POST
app.use(methodOverride("_method"));

// MIDDLEWARE
// body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// static files middleware
app.use(express.static('public'))

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`MongoDb connected to ${process.env.MONGO_CONNECTION_URL}`)
);

app.use(session({
  store: new mongoSessisonStore({ mongooseConnection: mongoose.connection }),
  secret: "feedmeseymour", //some random string
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000 },
}));

// CONTROLLERS
// fitting room three
const roomController = require('./controllers/room.js');
app.use('/room', roomController);
app.use(require('./controllers/users'))
app.use(require('./controllers/sessions'))

// GET INDEX
app.get('/', (req, res) => {
  res.render('index.ejs', {sessionUser: req.session.userId});
});


// SEED ROUTE
// NOTE: Do NOT run this route until AFTER you have a create user route up and running, as well as encryption working!
const seed = require('./models/seed.js');
// const User = require('./models/users.js');

app.get('/seedAgents', (req, res) => {
  // encrypts the given seed passwords
  seed.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  // seeds the data
  User.create(seed, (err, createdUsers) => {
    // logs created users
    console.log(createdUsers);
    // redirects to index
    res.redirect('/');
  });
});

// CONNECTIONS
app.listen(port, () => {
  console.log('listening on port: ', port);
});

