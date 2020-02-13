const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  pseudo: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: Boolean
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;