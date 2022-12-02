// 회원가입 만들고 리스트 뿌려보기

const express = require("express");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const _subTitle = "회원";
const _subVisualNo = "02";
const _gnb = "gnb01";

//const memberList = [];
let memberNo = 0;

mongoose.connect(process.env.MONG_URL);
const db = mongoose.connection;
db.once("open", () => {
  console.log("db 연결 성공");
});

// 테이블 만들기
const members = mongoose.Schema({
  no: "number",
  id: "string",
  password: "string",
  name: "string",
  phone: "string",
  address: "string",
  date: "date",
});
const Members = mongoose.model("Schema", members);

router.get("/join", (req, res) => {
  res.render("./member/join", { subTitle: _subTitle, contentsTitle: "회원가입", className: "member", subVisualNo: _subVisualNo, gnb: _gnb });
});
router.post("/join", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  // memberList.push({ no: ++memberNo, id, password, name, phone, address, date: moment().format("YYYY-MM-DD - hh : mm : ss ") });
  // res.redirect("/member/list");
  const newMembers = new Members({
    no: ++memberNo,
    id: id,
    password: password,
    name: name,
    phone: phone,
    address: address,
    date: new Date(),
  });

  newMembers.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      //console.log("멤버 추가 성공");
      res.redirect("/member/list");
    }
  });
});

router.get("/list", (req, res) => {
  //const list = [...memberList];
  Members.find((err, members) => {
    if (err) {
      console.log(err);
    } else {
      res.render("./member/memberlist", { subTitle: _subTitle, contentsTitle: "회원리스트", className: "member", subVisualNo: _subVisualNo, gnb: _gnb, list: members });
    }
  });
});

module.exports = router;
