const express = require("express");
const router = express.Router();
const _subTitle = "교육";
const _subVisualNo = "04";
const _gnb = "gnb04";

router.get("/admission", (req, res) => {
  res.render("./education/admission", { subTitle: _subTitle, contentsTitle: "입학안내", className: "admission", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/schedule", (req, res) => {
  res.render("./education/schedule", { subTitle: _subTitle, contentsTitle: "학사일정 및 내규", className: "schedule", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/scholarship", (req, res) => {
  res.render("./education/scholarship", { subTitle: _subTitle, contentsTitle: "장학금 정보", className: "scholarship", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/award", (req, res) => {
  res.render("./education/award", { subTitle: _subTitle, contentsTitle: "학생수상내역", className: "award", subVisualNo: _subVisualNo, gnb: _gnb });
});

module.exports = router;
