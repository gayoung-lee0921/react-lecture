// 함수 앞에 'async' 붙이면 promise로 변환(함수myAsync 랑 함수myAsync01 같은 의미 )
async function myAsync() {
  //console.log("나는 함수안에서 실행되는 코드, 그리고 나는 죽으면서 async 남김");
  return "async";
}
async function myAsync02() {
  return Promise.resolve("async");
}
async function myAsync03() {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("끝났다");
    }, 2000);
  });
  //async 함수 안에서만 await를 쓸 수 있고 await은 대기하게 만듦
  const result = await myPromise; //promise가 resolve 또는 reject 될 때까지 기다렸다가 이후에 코드 실행
  console.log(result);
}
// 에러 핸들링 불가능, only resolve 대응만 가능(reject 하면 에러 메시지 뜸)
// const msg = myAsync();
//console.log(myAsync());
// myAsync01().then(function (result) {
//   console.log(result);
// });
myAsync03();
