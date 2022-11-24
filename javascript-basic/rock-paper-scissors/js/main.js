// const fruits = ["apple", "banana", "pineapple"];
// fruits.unshift("이서현"); //앞에서 밀어넣기
// console.log(fruits);
// fruits.push("신태식"); // 뒤에서 밀어넣기
// console.log(fruits);
// fruits.shift(); // 앞에꺼 빼기
// console.log(fruits);
// fruits.pop(); //뒤에꺼 빼기
// console.log(fruits);
// const total = fruits.length;
// for (let i = 0; i < total; i++) {
//   console.log(fruits[i]);
// }
// fruits.forEach(function () {
//   console.log("나는 누가 호출해주나");
// });

// // 즉시 실행 함수 IIFE - 실행하면 끝남(익명함수 호출 방법)
// (function (name) {
//   console.log(`${name}, 난 나중에 호출됨`);
// })("이가영");

// //arrow function 표기법
// fruits.forEach((item, idx) => {
//   console.log(idx, "===", item);
// });

//pseudo array(유사배열)
const comList = document.querySelectorAll("#com ul li");
const playerList = document.querySelectorAll("#player ul li");

function playerChoice() {
  playerList.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      // console.log("click");
      clearInterval(clearComChoice);
    });
  });
}

function comChoice() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  comList.forEach(function (item, idx) {
    if (idx === random) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    //삼항연산자
    // idx === random ? (item.style.display = "block") : (item.style.display = "none");
  });
}
// comChoice();

//자동으로 실행
let clearComChoice = setInterval(comChoice, 50); //setInterval은 나중에 호출(비동기)
playerChoice();
