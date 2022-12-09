const db = require("./db/db.js");
const movieSchema = require("./models/movieschema");
const portfolioschema = require("./models/portfolioschema");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv").config();
const cors = require("cors");

const path = require("path"); // 경로 쓸거니 다운
const multer = require("multer"); //multipart/form-data 처리 위해
const express = require("express"); // 통신 쓸거니 다운
const app = express(); // 실행
app.set("port", process.env.port || 8081); //포트 설정
app.use(express.urlencoded({ extended: true })); // post로 넘어오는 값을 처리하기 위해
app.use(express.static(path.join(__dirname, "/public"))); //경로 설정
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(cors());
app.set("view engine", "ejs");
const port = app.get("port");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// multer 세팅 - 어디에 저장할건지 & 파일 이름 정하기
const diskStorage = multer.diskStorage({
  // destination: (req, file, done) => {
  //   done(null, path.join(__dirname, "/upload")); // 클라이언트에서 넘어온 파일들 여기다 저장
  // },
  filename: (req, file, done) => {
    //done(null, file.originalname + "-", Date.now());
    done(null, file.originalname.split(".")[0] + "-" + Date.now() + path.extname(file.originalname)); // 파일 이름 중복을 막기 위함
  },
});

const fileUpload = multer({ storage: diskStorage });

// routing (주소 안내)
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/insert", (req, res) => {
  res.render("insert");
});
app.get("/portfolio/insert", (req, res) => {
  res.render("pinterest");
});

app.post("/insert", fileUpload.single("poster"), (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const genre = Array.isArray(req.body.genre) ? req.body.genre.join("/") : req.body.genre;
  // Array.isArray() 배열인지 아닌지 확인
  // [호러, 로맨스] => 호러/로맨스 바뀜
  const summary = req.body.summary;
  const point = Number(req.body.point);
  //const poster = req.file.path;

  // db에 넣기

  cloudinary.uploader.upload(req.file.path, (result) => {
    console.log(result);
    const insertMovie = new movieSchema({
      title: title,
      date: date,
      genre: genre,
      summary: summary,
      point: point,
      poster: result.url,
    });
    insertMovie
      .save()
      .then((result) => {
        console.log(result);
        res.send("파일이 잘 저장되었습니다");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.post("/portfolio/insert", fileUpload.single("poster"), (req, res) => {
  const title = req.body.title;
  const category = Array.isArray(req.body.category) ? req.body.category.join("/") : req.body.category;
  const summary = req.body.summary;

  cloudinary.uploader.upload(req.file.path, (result) => {
    const insertportfolio = new portfolioschema({
      title: title,
      category: category,
      summary: summary,
      poster: result.url,
    });
    insertportfolio
      .save()
      .then((result) => {
        console.log(result);
        res.send("파일이 잘 저장되었습니다");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.get("/movie/list", (req, res) => {
  // db에서 읽어서 뿌리기
  movieSchema
    .find()
    .then((result) => {
      console.log(result);
      //   res.render("list", {
      //     movieList: result,
      //   });
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/portfolio/list", (req, res) => {
  portfolioschema
    .find()
    .then((result) => {
      console.log(result);
      // res.render('list',{movieList:result})
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`${port}에서 서버 가동중`); // 서버에서 듣겠다
});
