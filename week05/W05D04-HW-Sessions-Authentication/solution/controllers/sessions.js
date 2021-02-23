const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

router.get("/sessions/new", (req, res) => {
    res.render('auth/new')
});


router.post("/sessions", (req, res) => {
    const { username, password } = req.body;
    console.log(req.session)
    User.findOne({ username })
        .then((foundUser) => {
            console.log("Authenticate username, password", username, password);
            if (!foundUser) {
                res.status(500).send("Authentication error: no user found");
            } else if (bcrypt.compareSync(password, foundUser.password)) {
                console.log("Authenticate foundUser: ", foundUser);
                req.session.userId = foundUser._id;
                res.redirect("/");
            } else {
                res.status(500).send("Authentication error: wrong password");
            }
        })
        .catch((err) => console.log(err));


    // res.send('create user')
});


router.delete("/session/delete", (req, res) => {
    req.session.userId = null;
    res.redirect("/");
});

module.exports = router