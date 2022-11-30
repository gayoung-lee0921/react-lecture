const express = require("express");
const path = require("path");
// node의 기본 모듈 - path
const app = express();
// middle ware
app.use(express.static(path.join(__dirname, "/public")));
console.log(__dirname);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});
app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/portfolio.html"));
});
app.get("/members", (req, res) => {
  res.json({
    members: [
      { name: "이가영", grade: 1, address: "서울" },
      { name: "홍다현", grade: 1, address: "미국" },
      { name: "김효원", grade: 1, address: "일본" },
      { name: "박세녕", grade: 1, address: "러시아" },
      { name: "전희선", grade: 1, address: "중국" },
      { name: "유혜린", grade: 1, address: "유럽" },
    ],
  });
});
app.get("/board", (req, res) => {
  res.json({
    board: [
      { name: "이가영", grade: 1, subjeect: "컴퓨터 팝니다", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "이가영", grade: 1, subjeect: "컴퓨터 팝니다", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "이가영", grade: 1, subjeect: "컴퓨터 팝니다", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "이가영", grade: 1, subjeect: "컴퓨터 팝니다", contents: "사양 i7-9900k", date: "2022.11.30" },
    ],
  });
});
app.get("/year", (req, res) => {
  res.json({
    year: [
      { title: "jan", month: "1" },
      { title: "feb", month: "2" },
      { title: "mar", month: "3" },
      { title: "apr", month: "4" },
      { title: "may", month: "5" },
    ],
  });
});
//query string으로 받을 때
app.get("/movie", (req, res) => {
  console.log(req.query.title);
  fetch(`https://openapi.naver.com/v1/search/movie.json?query=${req.query.title}`, {
    headers: {
      "X-Naver-Client-Id": "aNajtYTUjHtnXMO9ExzS",
      "X-Naver-Client-Secret": "mKwOLitOQ1",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
    });
});
//params로 받을 때
app.get("/movie02/:title", (req, res) => {
  console.log(req.params.title);
  console.log(req.params.director);
  fetch(`https://openapi.naver.com/v1/search/movie.json?query=${req.params.title}`, {
    headers: {
      "X-Naver-Client-Id": "aNajtYTUjHtnXMO9ExzS",
      "X-Naver-Client-Secret": "mKwOLitOQ1",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      res.json(response);
    });
});
app.get("/papago/:words", (req, res) => {
  fetch("https://openapi.naver.com/v1/papago/n2mt", {
    method: "POST",
    headers: {
      "X-Naver-Client-Id": "aNajtYTUjHtnXMO9ExzS",
      "X-Naver-Client-Secret": "mKwOLitOQ1",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      target: "en",
      source: "ko",
      text: req.params.words,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      res.json(response);
    });
});

app.get("/trans", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/trans.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});
app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/search.html"));
});

app.listen(8086, () => {
  console.log("8086 포트에서 대기중");
});
