const express = require("express");
const router = new express.Router();
const toiletModel = require("../models/Toilet");
const uploader = require("../config/cloudinary");
const protectRoute = require("../middlewares/protectRoute");
const protectAdminRoute = require("../middlewares/protectAdminRoute");

// CRÉATION D'UN NOUVEAU CHIOTTE (CREATE)
router.get("/create-toilet", protectRoute, (req, res) => {
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
    .then(() => {
      // res.send("success toilet successfully created");
      res.redirect("/dashboard");
    })
    .catch(error => console.error(error));
});

// AFFICHAGE DE TOUS LES CHIOTTES (READ)
router.get("/dashboard", protectAdminRoute, (req, res) => {
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
      let ifLavabo 
      let isRelaisBebe
      let isPMR
      if (toilet.lavabo) ifLavabo = true
      else ifLavabo = false
      if (toilet.relais_bebe) isRelaisBebe = true
      else isRelaisBebe = false
      if (toilet.acces_pmr) isPMR = true
      else isPMR = false
      res.render("toilet-id", { toilet, ifLavabo });
    })
    .catch(error => console.log(error));
});

//MISE À JOUR D'UN TOILET PAR UN USER

router.post("/:id", (req, res) => {
  const { user_descriptions } = req.body;
  toiletModel
  .findByIdAndUpdate(
    req.params.id,
    {
      $push : {"user_descriptions" : user_descriptions}
    },
    { new: true }
  )
  .then(updatedToilet => {
    res.redirect(`/${req.params.id}`);
  })
  .catch(dbErr => res.send(dbErr));
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
  let user_photos;
  toiletModel
    .findById(req.params.id)
    .then(oldToilet => {
      user_photos = oldToilet.user_photos;
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
      if (req.file) user_photos = req.file.secure_url;
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
    })
    .catch(error => console.log(error));
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
