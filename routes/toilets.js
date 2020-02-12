const express = require("express");
const router = new express.Router();
const toiletModel = require("../models/Toilet");
const uploader = require("../config/cloudinary");
router.get("/create-toilet", (req, res) => {
  res.render("newtoilet", { scripts: ["userMap"] });
});

router.post("/create-toilet", uploader.single("toto"), (req, res) => {
  const {
    adresse,
    arrondissement,
    lat,
    lng,
    acces_pmr,
    horaire,
    type,
    relais_bebe,
    lavabo,
    user_descriptions,
    rate,
    // user_photos,
    recordid
  } = req.body;
  const geo_point_2d = [lat, lng];
  toiletModel
    .create({
      adresse,
      arrondissement,
      geo_point_2d,
      acces_pmr,
      horaire,
      type,
      relais_bebe,
      lavabo,
      user_descriptions,
      rate,
      // user_photos,
      recordid
    })
    .then(() => {
      res.send("success toilet successfully created");
      // res.redirect("/");
    })
    .catch(error => console.error(error));
});

router.get("/delete/:id", (req, res, next) => {
  albumModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.send("success toilet successfully created");
    })
    .catch(error => console.error(error));
});


module.exports = router;
