/*Promise는 서버 통신할 때 자주 사용하며 서버 터짐 문제 예방을 위해 사용함*/
/*
const myPromise = new Promise(function (resolve, reject) {
  // 택 1
  //resolve("약속 지킴");
  setTimeout(function () {
    reject("오늘은 기분이 별로야, 다음에 만나 ");
  }, 3000);
});
// result에 약속 지킴이 들어감
myPromise
  .then(function (result) {
    console.log(result);
  })
  // error에 약속 안 지킴이 들어감
  .catch(function (error) {
    console.log(error);
  })
  //무조건 실행
  .finally(function () {
    // 주로 로딩바를 만듦
    console.log("약속 상관없이 무조건 연락");
  });
*/

/*Promise는 순차적 작업때도 많이 사용, 비동기를 동기적으로 실행해야 할 때도 사용*/
function work(sec, callback) {
  setTimeout(function () {
    callback(new Date().toISOString());
  }, sec);
}
/*callback hell - 가독성 문제
work(1000, function (result) {
  console.log("첫번째 작업", result);
  work(1000, function (result) {
    work(1000, function (result) {
      console.log("세번째 작업", result);
    });
    console.log("두번째 작업", result);
  });
}); */

// ajax는 주로 promise, async, await로 해결

function workPromise(sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new Date().toISOString());
    }, sec);
  });
}
// new Date().toISOString()이 result로
workPromise(1000)
  .then(function (result) {
    console.log("첫 번째 작업", result);
    return workPromise(1000);
  })
  .then(function (result) {
    console.log("두 번째 작업", result);
    return workPromise(3000);
  })
  .then(function (result) {
    console.log("세 번째 작업", result);
  });
