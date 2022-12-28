// db 접속,  mongoose 다운 필요

const mongoose = require("mongoose");
const db = mongoose
  .connect(`mongodb+srv://gayoung0921:${process.env.MONGO_PASSWORD}@cluster0.ojcitbb.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
  })
  .then(() => {
    console.log("db연결");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
