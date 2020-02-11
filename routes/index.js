var express = require("express");
var router = new express.Router();
const toiletModel = require("../models/Toilet");

/* GET home page. */
router.get("/", function (req, res) {
  toiletModel
    .find()
    .then(toilets => {
      res.render("index", {
        toilets: JSON.stringify(toilets)
      });
    })
    .catch(dbErr => console.log("error loading toilets", dbErr));
});

router.get("/filter", async (req, res, next) => {
  const searchQuery = JSON.parse(req.query.search);
  const getAll = Object.entries(searchQuery).length === 0;
  var dbRes;

  try {
    if (getAll) {
      dbRes = await toiletModel.find();

    } else {
      dbRes = await toiletModel.find(searchQuery);
    }
    res.json(dbRes)

  } catch (err) {
    res.json(err)
    next(err)
  }
});

module.exports = router;