const express = require("express");
const router = express.Router();
const _subTitle = "대학소개";
const _subVisualNo = "01";
const _gnb = "gnb01";

router.get("/greeting", (req, res) => {
  res.render("greeting", { subTitle: _subTitle, contentsTitle: "학장인사말", className: "greeting", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/history", (req, res) => {
  res.render("history", { subTitle: _subTitle, contentsTitle: "연혁 및 역대학장", className: "history", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/organization", (req, res) => {
  res.render("organization", { subTitle: _subTitle, contentsTitle: "조직 및 행정안내", className: "organization", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/students", (req, res) => {
  res.render("students", { subTitle: _subTitle, contentsTitle: "학생회 및 동아리", className: "students", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/way", (req, res) => {
  res.render("way", { subTitle: _subTitle, contentsTitle: "오시는 길", className: "way", subVisualNo: _subVisualNo, gnb: _gnb });
});

module.exports = router; // index에서 쓸 수 있게 내보내기
