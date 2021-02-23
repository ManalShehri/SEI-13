const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: String,
  passwordDigest: String,
});

// Methods for login go here

/*
**************  createSecue method with Promise, so that you can use .then() in teh server when you work on the POST /signup router ************
UserSchema.statics.createSecure = (body) =>
  new Promise((resolve, reject) => {
    const { email, password } = body;
    console.log("I received this email, password :", email, password);
    // hash password user enters at sign up
    bcrypt.genSalt((err, salt) => {
      // changes every time
      console.log("bcrypt salt:", salt);
      bcrypt.hash(password, salt, (err, passwordHash) => {
        if (err) reject(err);
        console.log("passwordHash:", passwordHash);
        resolve(User.create({ email: email, passwordDigest: passwordHash }));
      });
    });
  });
*/

UserSchema.statics.createSecure = (email, password, callback) => {
  console.log("I received this email, password :", email, password);
  // hash password user enters at sign up
  bcrypt.genSalt((err, salt) => {
    // changes every time
    console.log("bcrypt salt:", salt);
    bcrypt.hash(password, salt, (err, passwordHash) => {
      console.log("password:", password);
      console.log("passwordHash:", passwordHash);
      User.create({ email: email, passwordDigest: passwordHash }, callback);
    });
  });
};

UserSchema.statics.authenticate = (email, password, callback) => {
  User.findOne({ email })
    .then((foundUser) => {
      console.log("Authenticate email, password", email, password);
      if (!foundUser) {
        callback("Error: no user found", null);
      } else if (foundUser.checkPassword(password)) {
        callback(null, foundUser);
      } else {
        callback("Error: wrong password", null);
      }
      console.log("Authenticate foundUser: ", foundUser);
    })
    .catch((err) => console.log(err));
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  console.log("Bcrypt: ", password, this.passwordDigest);
  return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model("User", UserSchema);

// export user model
module.exports = User;
