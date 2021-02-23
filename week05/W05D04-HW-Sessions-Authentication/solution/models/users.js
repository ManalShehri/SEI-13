const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    messages: [String],
});


var User = mongoose.model("User", UserSchema);

// export user model
module.exports = User;