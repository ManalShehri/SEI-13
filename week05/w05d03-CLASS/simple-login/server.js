// Require express framework and additional modules
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();
const mongoSessisonStore = require("connect-mongo")(session);
const validator = require("express-validator");

var User = require("./models/user");

// Create express app object
var app = express();

// Connect to database and pull in model(s)
mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`MongoDb connected to ${process.env.MONGO_CONNECTION_URL}`)
);

// Middleware
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new mongoSessisonStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: true,
    resave: true,
    secret: "Marco's super secret secret",
    cookie: { maxAge: 30 * 60 * 1000 },
  })
);

app.get("/", (req, res) => {
  User.find()
    .then((allUsers) => {
      res.render("index", { users: allUsers });
    })
    .catch((err) => console.log(err));
});

function checkSignIn(req, res, next) {
  // if the user is logged in, just go onto the router with the netxt() keyword
  if (req.session.userId) {
    next();
  } else {
    const err = new Error("You are not logged in!");
    next(err);
  }
}

app.get(
  "/protected-profile",

  checkSignIn,

  (req, res) => {
    User.findOne({ _id: req.session.userId })
      .then((loggedInUser) => {
        res.render("protected-profile", { user: loggedInUser });
      })
      .catch((err) => console.log("Error: User not found ", err));
  }
);

// show the login form
app.get("/login", function (req, res) {
  res.render("login");
});

// show the signup form
app.get("/signup", function (req, res) {
  res.render("signup");
});

app.post("/sessions", (req, res) => {
  console.log("Login email, password", req.body.email, req.body.password);
  // Authenitcate User
  User.authenticate(req.body.email, req.body.password, (err, foundUser) => {
    if (err) {
      console.log("Authentication error: ", err);
      res.status(500).send(err);
    } else {
      req.session.userId = foundUser._id;
      res.redirect("/profile");
    }
  });
});

/*
**************** uses the .then(). This only works if you uncomment the correct method in models/user.js ****************

app.post("/users", (req, res) => {
  User.createSecure({ email: req.body.email, password: req.body.password })
    .then((newUser) => {
      console.log("newUser: ", newUser);
      res.redirect("/login");
    })
    .catch((err) => console.log(err));
});
*/

app.post(
  "/users",

  validator.body("email").isEmail(),
  validator.body("password").isLength({ min: 5 }),

  (req, res) => {
    const validationErrors = validator.validationResult(req);

    if (!validationErrors.isEmpty())
      return res.status(500).send("Validation errors");

    User.createSecure(req.body.email, req.body.password, (err, newUser) => {
      console.log("newUser: ", newUser);
      req.session.userId = newUser._id;
      res.redirect("/profile");
    });
  }
);

app.get("/profile", (req, res) => {
  console.log("From Login/Signup req.session.userId: ", req.session.userId);
  User.findOne({ _id: req.session.userId })
    .then((currentUser) => {
      res.render("user-show", { user: currentUser });
    })
    .catch((err) => console.log("Error: User not found ", err));
});

app.get("/logout", (req, res) => {
  req.session.userId = null;
  res.redirect("/");
});

app.use("/protected-profile", (err, req, res, next) => {
  console.log(err);
  res.redirect("/login");
});

// listen on port 3000
app.listen(process.env.PORT, function () {
  console.log(`Server is running ${process.env.PORT}`);
});
