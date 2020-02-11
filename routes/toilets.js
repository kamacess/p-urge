const express = require("express");
const router = new express.Router();
const toiletModel = require("../models/Toilet");

router.get("/create-toilet", (req, res) =>{
    res.render("newtoilet", {scripts: ["userMap"]})
});

router.post("/create-toilet", (req, res) => {
    const { adresse, arrondissement, geo_point_2d, acces_pmr, horaire, type, relais_bebe, lavabo, user_descriptions, rate, user_photos } = req.body;
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
        user_photos
      })
      .then(() => {
        res.send("success toilet successfully created" );
        res.redirect("/");
      })
      .catch(next);
  });

  module.exports = router;