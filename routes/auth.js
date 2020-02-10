var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/sign-in", function(req, res) {
  res.render("signin");
});

router.get("/sign-up", function(req, res) {
    res.render("signup");
  });

module.exports = router;
