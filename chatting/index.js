// socket
const path = require("path");
const http = require("http");
const moment = require("moment"); // 시간
const socketIO = require("socket.io");
const express = require("express");
const app = express();
const socketServer = http.createServer(app);
const io = socketIO(socketServer);
app.set("port", process.env.port || 8081);
app.use(express.static(path.join(__dirname, "/public")));
const PORT = app.get("port");

// client에서 접속 대기중
//console.log(moment(new Date()).format("A hh:mm"));  현재의  시:분 출력, A는 am/pm, new Date() 또는 Date.now()
io.on("connection", (socket) => {
  console.log("클라이언트 연결 되었습니다");
  socket.on("yaho", (clientData) => {
    io.emit("serverYaho", { name: clientData.name, msg: clientData.msg, time: moment(new Date()).format("A hh:mm") });
  });
  socket.on("enter", (clientData) => {
    const { name, gender, age } = clientData; // 구조분해할당
    //io.emit("serverEnter", { name: name });
    io.emit("serverEnter", { name: clientData.name });
  });
});

app.get("/chatting", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/chatting.html"));
});
app.get("/", (req, res) => {
  res.send("hello express");
});

socketServer.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
