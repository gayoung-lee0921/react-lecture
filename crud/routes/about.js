const express = require("express");
const moment = require("moment");
const router = express.Router();
const _subTitle = "대학소개";
const _subVisualNo = "01";
const _gnb = "gnb01";

// 단 서버가 꺼지면 boardlist 초기화 되는 문제가 있음 <= db가 필요한 이유
let boardlist = [];
let boardNo = 0;

router.get("/greeting", (req, res) => {
  // .render는 ejs로 만든 페이지를 보여줘라
  res.render("./about/greeting", { subTitle: _subTitle, contentsTitle: "학장인사말", className: "greeting", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/history", (req, res) => {
  res.render("./about/history", { subTitle: _subTitle, contentsTitle: "연혁 및 역대학장", className: "history", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/organization", (req, res) => {
  res.render("./about/organization", { subTitle: _subTitle, contentsTitle: "조직 및 행정안내", className: "organization", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/students", (req, res) => {
  res.render("./about/students", { subTitle: _subTitle, contentsTitle: "학생회 및 동아리", className: "students", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/way", (req, res) => {
  res.render("./about/way", { subTitle: _subTitle, contentsTitle: "오시는 길", className: "way", subVisualNo: _subVisualNo, gnb: _gnb });
});

router.get("/list", (req, res) => {
  const list = [...boardlist];
  res.render("./about/list", { subTitle: _subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: _subVisualNo, gnb: _gnb, list: list });
});
router.get("/write", (req, res) => {
  res.render("./about/write", { subTitle: _subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.post("/write", (req, res) => {
  // 1. 넘어온 값을 받아야 함, name으로 받아옴
  //console.log(req.body.writer);
  //console.log(req.body.subject);
  //console.log(req.body.contents);
  // 2. 결과 처리
  // .redirect() 페이지를 다시 바꿔줘라
  boardlist.push({ no: ++boardNo, writer: req.body.writer, subject: req.body.subject, date: moment().format("YYYY MM DD - hh : mm : ss ") });
  res.redirect("/about/list"); // /about/list에서 보여줘라
});

module.exports = router; // index에서 쓸 수 있게 내보내기
