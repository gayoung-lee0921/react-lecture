const mongoose = require("mongoose");

const movieschema = mongoose.Schema({
  title: String,
  date: String,
  genre: String,
  summary: "string",
  point: Number,
  poster: {
    type: String,
    // require: true, 반드시 받아야 겠다, db에 안들어 갔으면 오류 뜸
    // unique: true,
  },
});
// Movie란 이름으로 collection이 만들어지는데 복수형 movies로 만들어짐
const Movie = mongoose.model("Movie", movieschema);
module.exports = Movie;
