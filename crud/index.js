//template engine
// server 만드는 법
const express = require("express"); // npm i express 한 후에 express 가져옴,
const path = require("path"); //경로 때문에
const ejs = require("ejs"); // npm i ejs 한 후에 ejs를 가져옴
const app = express(); //express 쓰겠다
app.set("view engine", "ejs"); // template engine - ejs 랑 pug
app.set("port", process.env.PORT || 8081); //port 설정(process.env.PORT는 업로드 한 곳의 포트번호를 쓰겠다)
app.use(express.static(path.join(__dirname, "/public"))); // 정적 파일을 index.html에서 사용하고 싶으면 경로를 잡아야 됨
const PORT = app.set("port");

const aboutRouter = require("./routes/about.js"); // about에서 내보낸거 받아씀
const majorRouter = require("./routes/major.js");
const researchRouter = require("./routes/research.js");
const educationRouter = require("./routes/education.js");
const communityRouter = require("./routes/community.js");
app.use("/about", aboutRouter); // /about를 써야 aboutRouter를 쓸 수 있게 만듦
app.use("/major", majorRouter);
app.use("/research", researchRouter);
app.use("/education", educationRouter);
app.use("/community", communityRouter);

//console.log(PORT); 8081 port

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "/public/index.html")); //__dirname은 crud파일까지 온 거임
  res.render("index"); //ejs 불러올 떈 .render()
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 대기중`);
});
