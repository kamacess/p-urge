const express = require("express");
const router = new express.Router();
const toiletModel = require("../models/Toilet");
const uploader = require("../config/cloudinary");

// CRÉATION D'UN NOUVEAU CHIOTTE (CREATE)
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

// AFFICHAGE DE TOUS LES CHIOTTES (READ)
router.get("/dashboard", (req, res) => {
  toiletModel
  .find()
  .then(dbRes => {
    res.render("admin-toilet", {toilets: dbRes 
  })
  .catch(dbErr => console.error(dbErr))
})
});


// AFFICHAGE D'UN SEUL CHIOTTE

router.get("/:id", (req, res) => {
  toiletModel
    .findById(req.params.id)
    .then(toilet => {
      res.render("toilet-id", { toilet });
    })
    .catch(error => console.log(error));
});

// MISE À JOUR D'UN CHIOTTE (UPDATE)

router.get("/edit/:id", (req,res) => {
  toiletModel
  .findById(req.params.id)
  .then(dbRes => {
    res.send(dbRes)
  })
  .catch(dbErr => res.send(dbErr))
})

router.post("/edit/:id", (req,res) => {
  toiletModel
  .findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect("/dashboard");
  })
  .catch(dbErr => res.send(dbErr))
})

// EFFACEMENT D'UN CHIOTTE (DELETE)
router.get("/:id/delete", (req, res) => {
  toiletModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.send("success toilet successfully deleted");
    })
    .catch(error => console.log(error));
});


module.exports = router;
