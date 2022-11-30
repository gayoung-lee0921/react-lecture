const http = require("http"); //require 함수는 필요한 모듈을 들고옴
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
  if (req.url === "/") {
    res.write("<h1>hello node server</h1>");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>여기는 about 페이지 입니다.");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");
    res.end();
  } else if (req.url === "/portfolio") {
    res.write("<h1>여기는 portfolio 페이지 입니다.");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");

    res.end();
  }
});
server.listen(8085); //port 번호
server.on("listening", () => {
  console.log("서버가 8085에서 대기 중입니다.");
});
