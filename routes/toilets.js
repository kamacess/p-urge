const express = require("express");
const router = new express.Router();
const toiletModel = require("../models/Toilet");
const uploader = require("../config/cloudinary");
const protectRoute = require("../middlewares/protectRoute");
const protectAdminRoute = require("../middlewares/protectAdminRoute");

// CRÉATION D'UN NOUVEAU CHIOTTE (CREATE)
router.get("/create-toilet", (req, res) => {
  res.render("newtoilet", { scripts: ["userMap"] });
});

router.post("/create-toilet", uploader.single("user_photos"), (req, res) => {
  let user_photos;
  if (req.file) {
    user_photos = req.file.secure_url;
  } else {
    const user_photos =
      "https://res.cloudinary.com/kalash/image/upload/v1581609822/toilet-pictures/purge_jmu5au.jpg";
  }
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
      user_photos,
      recordid
    })
    .then(newToilet => {
      console.log("ici");
      console.log(newToilet);
      // res.send("success toilet successfully created");
      res.redirect("/dashboard");
    })
    .catch(error => console.error(error));
});

// AFFICHAGE DE TOUS LES CHIOTTES (READ)
router.get("/dashboard", (req, res) => {
  toiletModel.find().then(dbRes => {
    res
      .render("admin-toilet", { toilets: dbRes })
      .catch(dbErr => console.error(dbErr));
  });
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

router.get("/edit/:id", (req, res) => {
  toiletModel
    .findById(req.params.id)
    .then(toilet => {
      res.render("toilet-edit", { toilet, scripts: ["userUpdateMap"] });
    })
    .catch(error => console.log(error));
});

router.post("/edit/:id", uploader.single("user_photos"), (req, res) => {
  toiletModel
  .findById(req.params.id)
  if 
  //faire un find sur la photo actuelle (then => la valeur de l'image) INCEPTION DE THEN
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
    user_photos,
    recordid
  } = req.body;
  const geo_point_2d = [lat, lng];
  toiletModel
    .findByIdAndUpdate(
      req.params.id,
      {
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
        user_photos,
        recordid
      },
      { new: true }
    )
    .then(updatedToilet => {
      console.log(updatedToilet);
      res.redirect("/dashboard");
    })
    .catch(dbErr => res.send(dbErr));
});

// EFFACEMENT D'UN CHIOTTE (DELETE)
router.get("/:id/delete", protectAdminRoute, (req, res) => {
  toiletModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/dashboard");
    })
    .catch(error => console.log(error));
});

module.exports = router;
