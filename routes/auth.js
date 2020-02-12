var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/signin", function(req, res) {
  res.render("signin");
});

router.get("/signup", function(req, res) {
    res.render("signup");
  });

module.exports = router;
