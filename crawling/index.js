// <데이터 크롤링>
const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const cors = require("cors");
app.use(cors()); // 모든 도메인에서 접속 가능하게 만들겠다, client에서 열 수 있게 만듦

app.set("port", process.env.port || 8081);
const port = app.get("port");

app.get("/", (req, res) => {
  res.send("hello express");
});

// axios .get()은 정적인 페이지 가져올 때
app.get("/daum/news", (req, res) => {
  // 다음 뉴스 크롤링 부분
  // axios는 ajax 툴, fetch / promise
  axios
    .get("https://news.daum.net/") // promise를 리턴, .get 대신 fetch()를 써도 됨 대신 result를 써야됨 => fetch엔 자동으로 js설치 돼 있어서
    .then(function (result) {
      //console.log(result.data); 모든 데이터를 불러옴
      const returnList = [];
      const $ = cheerio.load(result.data); // 긁어온 html을 제이쿼리처럼 dom을  select 할 수 있음
      const list = $(".list_newsissue").children("li");
      list.each((idx, item) => {
        returnList.push({
          title: $(item).find("a").text().replaceAll("\n", "").trim(), // .replaceAll('\n', "") => 백슬래시를 공백으로 처리, .trim() => 공백제거
          img: $(item).find("a img").attr("src"),
          link: $(item).find("a").attr("href"),
        });
      });
      console.log(returnList);
      res.json(returnList);
    });
});

// 비동기로 가져올 땐 puppeteer 사용
app.get("/daum/movie", async (req, res) => {
  // puppeteer 설치하면 크로미니움(크롬의 개발 버전) 생겨남
  const browser = await puppeteer.launch({
    headless: false, // 크로미니움 안뜨게, headless: true (default)
  });
  const page = await browser.newPage();
  await page.setViewport({
    //크기 설정
    width: 1900,
    height: 800,
  });
  await page.goto("https://movie.daum.net/main");
  await page.waitForSelector(".list_reserveranking");
  const content = await page.content("https://movie.daum.net/main");
  //console.log(content);
  const $ = cheerio.load(content);
  const list_reserveranking = $(".topmovie-slide .list_reserveranking").children("li");
  const list = [];
  //prettier-ignore
  list_reserveranking.each((idx, item) => {
    list.push({
      img: $(item).find(".poster_movie img").attr("src"),
      title: $(item).find(".thumb_cont a").text(),
      link: $(item).find(".poster_info a ").attr("href"),
      info: {
        openDate: $(item).find(".poster_info a .list_info:nth-child(1) dd").text(),
        genre: $(item).find(".poster_info a .list_info:nth-child(2) dd").text().replace(/[\n\s]/g,""),
        grade: $(item).find(".poster_info a .list_info:nth-child(3) dd").text().replace(/[\n\s]/g,""),
        director: $(item).find(".poster_info a .list_info:nth-child(4) dd").text().replace(/[\n\s]/g,""),
        mainRole: $(item).find(".poster_info a .list_info:nth-child(5) dd").text().replace(/[\n\s]/g,""),
      },
    });
  });
  res.json(list);
});

app.get("/naver/webtoon", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1900,
    height: 800,
  });
  await page.goto("https://comic.naver.com/webtoon/weekdayList?week=wed");
  await page.waitForSelector(".img_list");
  const content = await page.content("https://comic.naver.com/webtoon/weekdayList?week=wed");

  const $ = cheerio.load(content);
  const list_reserveranking = $(".list_area .img_list").children("li");
  const list = [];
  //prettier-ignore
  list_reserveranking.each((idx, item) => {
      list.push({
        img: $(item).find('.thumb img').attr('src'),
        title: $(item).find("dl dt a").text(),
        link: $(item).find('.thumb a').attr('href'),
        desc:$(item).find('dl .desc a').text(),
        rating:$(item).find('dl dd .rating_type strong').text(),
      });
    });
  res.json(list);
});
