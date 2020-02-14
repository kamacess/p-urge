const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const toiletSchema = new Schema({
    arrondissement: String,
    adresse: String,
    geo_point_2d: [Number],
    acces_pmr: Boolean,
    horaire: String,
    type: {type: String, enum: ["TOILETTES", "SANISETTE", "LAVATORY", "URINOIR", "WC PUBLICS PERMANENTS"]},
    relais_bebe: Boolean,
    lavabo: Boolean,
    user_descriptions: [String],
    rate: Number,
    user_photos: { type : String, default:"https://res.cloudinary.com/kalash/image/upload/v1581609822/toilet-pictures/purge_jmu5au.jpg"},
    recordid: String
});
const toiletModel = mongoose.model("toilet", toiletSchema);
module.exports = toiletModel;
