const mongoose = require("mongoose");
const db = mongoose
  .connect(MONG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
  })
  .then(() => {
    console.log("db 연결");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
