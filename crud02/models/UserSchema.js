const mongoose = require("mongoose");
/*
mongoose.Schema({
  id: String,
  password: String,
  name: String,
  phone: String,
  address: String,
  date: Date,
});
*/
const UserSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: String,
  phone: String,
  address: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

//module.exports = mongoose.model("User", UserSchema);
const User = mongoose.model("User", UserSchema); // users는 컬렉션이 생성된다.
module.exports = User;
