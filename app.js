console.log("node says : waxOn/waxOff !");

require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// custom helper
hbs.registerHelper("isLink", function(string, options) {
  if (!string) return `unknown`;
  if (string.length > 14) {
    return `<a href="${string}">${"horaires"}</a>`;
  } else {
    return options.fn(this);
  }
});

hbs.registerHelper("hourToLink", function(string) {
  console.log(string)
  const maybe = `<img src="./images/question-circle-solid.svg" alt="we don't know">`;
  if (!string) {
    return maybe;
  } else if (string.length < 12) {
    return string;
  } else {
    return `<a target="_blank" href=${string}>working hours</a>`;
  }
});

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

app.use(flash());

app.locals.site_url = `http://localhost:${process.env.PORT}`;
// used in front end to perform ajax request (var instead of hardcoded)
app.use(require("./middlewares/exposeLoginStatus"));
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/toilets"));
module.exports = app;
