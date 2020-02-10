var express = require("express");
var router = new express.Router();
const toiletModel = require("../models/Toilet");

/* GET home page. */
router.get("/", function(req, res) {
  toiletModel
  .find()
  .then(toilets => {
    res.render("index", {toilets: JSON.stringify(toilets)});
  })
  .catch(dbErr => console.log("error loading toilets", dbErr));
});

module.exports = router;
