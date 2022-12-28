const express = require("express");
const app = express();
const cors = require("cors"); // port 번호가 다르면 cors 설치
app.set("port", process.env.PORT || 5000);
const PORT = app.get("port");
const diarySchema = require("./models/DiarySchema");
const dotenv = require("dotenv"); // .env 파일 사용하려고 설치
dotenv.config();
const db = require("./db/db.js");

app.use(cors()); // 아무나 들어와도 괜춘
app.use(express.urlencoded({ extended: true })); // body에 주소를 실어보내기 위해 설치 1
app.use(express.json()); // body에 주소를 실어보내기 위해 설치 2

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/diary/list", async (req, res) => {
  //db 접속해서 기존의 데이터 들고오기
  const diaryList = await diarySchema.find();
  res.json(diaryList);
});
//c(post)r(get)u(put)d(delete) => http 메소드
app.post("/diary/insert", async (req, res) => {
  //body에 주소를 실어보냄
  //console.log(req.body);
  //const { author, contents, emotion, date } = req.body;
  const insertDiary = new diarySchema({ ...req.body });
  await insertDiary.save();
  res.json({ state: "ok" });
});
// req.param으로 받을 땐 이름이 없으니깐 내가 이름 설정해야됨
app.delete("/diary/delet/:id", async (req, res) => {
  //req.query(쿼리방식)
  //req.param(주소방식)
  //consolelog(req.params.id);
  const { id } = req.params;
  await diarySchema.deleteOne({ _id: id });
  res.json({ state: "ok" });
});

app.put("/diary/modify/:id", async (req, res) => {
  const { id } = req.params;
  const { contents } = req.body;
  await diarySchema.updateOne({ _id: id }, { $set: { contents: contents } });
  res.json({ state: "ok" });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 대기중`);
});
