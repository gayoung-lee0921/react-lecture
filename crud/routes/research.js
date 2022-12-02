const express = require("express");
const router = express.Router();
const _subTitle = "연구";
const _subVisualNo = "03";
const _gnb = "gnb03";

router.get("/institute", (req, res) => {
  //res.send(); 일반 html로 내보내기
  //res.json(); json으로 내보내기
  //res.render(); ejs 내보내기
  res.render("./research/institute", { subTitle: _subTitle, contentsTitle: "대학부설연구소", className: "institute", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/bk21", (req, res) => {
  res.render("./research/bk21", { subTitle: _subTitle, contentsTitle: "BK21+교육연구단", className: "bk21", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/business", (req, res) => {
  res.render("./research/business", { subTitle: _subTitle, contentsTitle: "주요연구사업단", className: "business", subVisualNo: _subVisualNo, gnb: _gnb });
});

module.exports = router;
