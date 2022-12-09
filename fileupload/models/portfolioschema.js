const mongoose = require("mongoose");

const portfolioschema = mongoose.Schema({
  title: String,
  category: String,
  summary: "string",
  point: Number,
  poster: {
    type: String,
    require: true,
  },
});
const portfolio = mongoose.model("portfolio", portfolioschema);
module.exports = portfolio;
