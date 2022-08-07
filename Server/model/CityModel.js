const mongoose = require("mongoose");

const Schema = mongoos.Schema;

//Schema
const citySchema = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
});

// models
const City = mongoose.model("City", citySchema);

module.exports = City;
