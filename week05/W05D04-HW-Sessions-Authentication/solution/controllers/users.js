const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

router.get("/users/new", (req, res) => {
    res.render('users/new')
});

router.post("/user/new", (req, res) => {
    const { username, password } = req.body
    console.log("I received this username, password :", username, password);
    // hash password user enters at sign up
    bcrypt.genSalt((err, salt) => {
        // changes every time
        console.log("bcrypt salt:", salt);
        bcrypt.hash(password, salt, (err, passwordHash) => {
            console.log("password:", password);
            console.log("passwordHash:", passwordHash);
            User.create({ username: username, password: passwordHash }, (err, newUser) => {
                console.log("newUser: ", newUser);
                req.session.userId = newUser._id;
                res.redirect("/");
            });
        });
    });
});

module.exports = router