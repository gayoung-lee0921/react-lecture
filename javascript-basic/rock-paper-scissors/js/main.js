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
const result = document.querySelector("#result ul");
const cover = document.querySelector("#cover");
const resultTxt = cover.querySelector("h1 strong");
const btnRestart = cover.querySelector("#btnRestart");
let random = 0; // 변수 random을 전역변수로 설정
let gamecount = 0;
let clearComChoice = 0;
let clearReset = 0;
let winCount = 0;
let drawCount = 0;
let loseCount = 0;

// ddd = 3, w= 1 & d=1 & l=1
//w >=2, w=1 &&& d==2

function playerChoice() {
  playerList.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      gamecount += 1;
      document.body.classList.add("blocking");
      clearInterval(clearComChoice);
      // 숫자가 아닌 값을 뽑고 싶을 때 방법
      const selected = parseInt(this.dataset.id); //type casting(형 변환), Number() / parseInt() : 정수
      decide(selected, random);
      restartFunc();
      if (gamecount >= 3) {
        cover.classList.add("on");
        clearInterval(clearComChoice);
        clearTimeout(clearReset);
        // 게임은 3판
        if (drawCount === 3 || (winCount === 1 && drawCount === 1 && loseCount === 1)) {
          resultTxt.textContent = "DRAW";
        } else if (winCount >= 2 || (winCount >= 1 && drawCount >= 2)) {
          resultTxt.textContent = "WIN";
        } else {
          resultTxt.textContent = "LOSE";
        }
      }
    });
  });
}

// 승패 분석
function decide(playerNum, comNum) {
  const li = document.createElement("li");
  if (playerNum === comNum) {
    li.textContent = "D";
    li.classList.add("draw");
    drawCount++;
    // 웹 브라우저가 태그로 인식했음 좋겠다 .innerHTNL
    //result.innerHTML += `<li class="draw">D</li>`;
    //result.append(`<li class="draw">D</li>`);
  } else if ((comNum === 0 && playerNum === 1) || (comNum === 1 && playerNum === 2) || (comNum === 2 && playerNum === 0)) {
    li.textContent = "W";
    li.classList.add("win");
    //result.innerHTML = `<li class="win">W</li>`;
    //result.append(`<li class="win">W</li>`);
    winCount++;
  } else {
    li.textContent = "L";
    li.classList.add("lose");
    //result.innerHTML += `<li class="lose">L</li>`;
    //result.append(`<li class="lose">L</li>`);
    loseCount;
  }
  result.append(li);
}

function comChoice() {
  random = Math.floor(Math.random() * 3);
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

// 완전 리셋 - 3게임 모두 끝났을 때
function restart() {
  cover.classList.remove("on");
  gamecount = 0;
  winCount = 0;
  drawCount = 0;
  loseCount = 0;
  result.innerHTML = "";
  restartFunc();
}

// 1게임 끝났을 때 리셋
function restartFunc() {
  clearReset = setTimeout(function () {
    clearComChoice = setInterval(comChoice, 20);
    document.body.classList.remove("blocking");
  }, 1000);
}

btnRestart.addEventListener("click", restart);
playerChoice();
restart();
