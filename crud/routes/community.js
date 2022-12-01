const express = require("express");
const router = express.Router();
const _subTitle = "소식 및 시설";
const _subVisualNo = "05";
const _gnb = "gnb05";

router.get("/notice", (req, res) => {
  res.render("notice", { subTitle: _subTitle, contentsTitle: "학사공지", className: "notice", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/result", (req, res) => {
  res.render("result", { subTitle: _subTitle, contentsTitle: "교육 및 연구성과", className: "result", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/concert", (req, res) => {
  res.render("concert", { subTitle: _subTitle, contentsTitle: "과학콘서트 및 대중강연", className: "concert", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/facility", (req, res) => {
  res.render("facility", { subTitle: _subTitle, contentsTitle: "주요시설", className: "facility", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/fund", (req, res) => {
  res.render("fund", { subTitle: _subTitle, contentsTitle: "이과대학 발전기금", className: "fund", subVisualNo: _subVisualNo, gnb: _gnb });
});

module.exports = router;
