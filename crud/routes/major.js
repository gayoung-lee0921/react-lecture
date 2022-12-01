const express = require("express");
const router = express.Router();
const _subTitle = "전공안내";
const _subVisualNo = "02";
const _gnb = "gnb02";

router.get("/department", (req, res) => {
  res.render("department", { subTitle: _subTitle, contentsTitle: "학부", className: "department", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.get("/graduate", (req, res) => {
  res.render("graduate", { subTitle: _subTitle, contentsTitle: "대학원", className: "graduate", subVisualNo: _subVisualNo, gnb: _gnb });
});

module.exports = router;
