// 대기열(queue)로 보냄, 자바스크립트는 비동기적으로 실행, 순차적 진행 X => event loop
//setTimeout 비동기

setInterval(function () {
  console.log("aaa");
}, 1000);
setTimeout(function () {
  console.log("1");
}, 1000);
console.log(2);
