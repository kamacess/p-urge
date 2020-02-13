var express = require("express");
var router = new express.Router();
const toiletModel = require("../models/Toilet");

/* GET home page. */
router.get("/", function (req, res) {
  toiletModel
    .find()
    .then(toilets => {

      res.render("index", {
        scripts: ["google"],

        toilets: JSON.stringify(toilets)
      });
    })
    .catch(dbErr => console.log("error loading toilets", dbErr));
});

router.get("/filter", async (req, res, next) => {
  const finalQuery = JSON.parse(req.query.search);
  finalQuery.arrondissement = req.query.selectedArr
  console.log(finalQuery);

  const getAll = Object.entries(finalQuery).length === 1;
  var dbRes;

  try {
    if (getAll && finalQuery.arrondissement === "all") {
      dbRes = await toiletModel.find();

    } else if (finalQuery.arrondissement === "all") {
      dbRes = await toiletModel.find(JSON.parse(req.query.search));
    } else {
      dbRes = await toiletModel.find(finalQuery);
    }
    res.json(dbRes)

  } catch (err) {
    res.json(err)
    next(err)
  }
});

router.get("/filter-arr", (req, res) => {
  console.log("hey filter arr")
  const arrSelected = JSON.parse(req.query.arrSelected);

  if (arrSelected === "all") {
    toiletModel
      .find()
      .then(toilets => {
        res.send(toilets)
      })
  } else {}
  toiletModel
    .find({
      arrondissement: arrSelected
    })
    .then(toilets => {
      res.send(toilets)
    })
    .catch(err => console.log("error", err));
})

module.exports = router;