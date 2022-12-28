const mongoose = require("mongoose");
// monogodb atlas에 저장하는 방법
const DiarySchema = mongoose.Schema({
  author: String,
  contents: String,
  emotion: Number,
  date: Date,
});

const Diary = mongoose.model("diary", DiarySchema);
module.exports = Diary;
