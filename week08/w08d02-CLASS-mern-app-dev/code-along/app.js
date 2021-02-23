var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/users", usersRouter);

// app.use('/', indexRouter);
// We create a route that answers calls on the URL "/" by sending the index.html from the React app build
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
