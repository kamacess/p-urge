const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs");
const flash = require("connect-flash");
const exposeFlashMessage = require("../middlewares/exposeFlashMessage");

/* GET home page. */
router.get("/signin", exposeFlashMessage, function (req, res) {
  res.render("signin");
});

router.post("/signin", exposeFlashMessage, (req, res, next) => {
  const user = req.body;

  if (!user.email || !user.password) {
    req.flash("error", "wrong credentials");
    return res.redirect("/auth/signin");
  }

  userModel
    .findOne({
      email: user.email
    })
    .then(dbRes => {
      if (!dbRes) {
        req.flash("error", "wrong credentials");
        return res.redirect("/auth/signin");
      }

      if (bcryptjs.compareSync(user.password, dbRes.password)) {
        const {
          _doc: clone
        } = {
          ...dbRes
        };
        delete clone.password;

        req.session.currentUser = clone;
        req.flash("success", "and you're in ! toiletfully yours x");
        return res.redirect("/");
      } else {
        req.flash("error", "wrong credentials, try again or sign up !");
        return res.redirect("/auth/signin");
      }
    })
    .catch(next);
});

router.get("/signup", exposeFlashMessage, function (req, res) {
  res.render("signup");
});

router.post("/signup", exposeFlashMessage, (req, res, next) => {
  const user = req.body;
  console.log(user);
  if (!user.email || !user.password || !user.pseudo) {
    req.flash("error", "no empty fields here please, try again !");
    return res.redirect("/auth/signup");
  } else {
    userModel
      .findOne({
        email: user.email
      })
      .then(dbRes => {
        if (dbRes) {
          req.flash("error", "sorry, this email is already taken...");
          return res.redirect("/auth/signup");
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashed = bcryptjs.hashSync(user.password, salt);
        user.password = hashed;

        userModel.create(user).then(() => {
          req.flash("success", "welcome fellow toilet aficionado, you can now log in !");
          return res.redirect("/auth/signin");
        })
      })
      .catch(next);
  }
});


module.exports = router;