Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let select = Math.floor(Math.random() * this.length);
    let temp = this[i];
    this[i] = this[select];
    this[select] = temp;
  }
  return this;
};

const memorys = [
  { idx: 0, title: "mouse", img: "images/12jisin/mouse.svg" },
  { idx: 1, title: "cow", img: "images/12jisin/cow.svg" },
  { idx: 2, title: "tiger", img: "images/12jisin/tiger.svg" },
  //   { idx: 3, title: "rabbit", img: "images/12jisin/rabbit.svg" },
  //   { idx: 4, title: "dragon", img: "images/12jisin/dragon.svg" },
  //   { idx: 5, title: "snake", img: "images/12jisin/snake.svg" },
  //   { idx: 6, title: "horse", img: "images/12jisin/horse.svg" },
  //   { idx: 7, title: "sheep", img: "images/12jisin/sheep.svg" },
  //   { idx: 8, title: "monkey", img: "images/12jisin/monkey.svg" },
  //   { idx: 9, title: "chicken", img: "images/12jisin/chicken.svg" },
  //   { idx: 10, title: "dog", img: "images/12jisin/dog.svg" },
  //   { idx: 11, title: "pig", img: "images/12jisin/pig.svg" },
];
const main = document.querySelector("#main");

function restart() {
  main.innerHTML = "";
  const doubleMemorys = [...memorys, ...memorys].shuffle();
  const ul = document.createElement("ul");
  doubleMemorys.forEach(function (item, idx) {
    //console.log(item);
    const li = document.createElement("li");
    li.innerHTML = `<div class = "card on" data-idx="${item.idx}">
                      <div class="front face">
                          <img src="${item.img}" alt="" />
                          <p>${item.title}</p>
                      </div>
                      <div class = "back face"></div>
                  </div>
                      `;
    ul.append(li);
  });
  main.append(ul);
  const items = document.querySelectorAll("#main ul li");
  const selectedCards = [];
  let score = 0;
  const end = memorys.length; // memorys가 몇개가 될지 모르니깐
  let clearIdx01 = null;
  let clearIdx02 = null;

  items.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      const card = this.querySelector(".card");
      // 눌렀던거 다시 누르지 못하게
      if (card.classList.contains("on")) {
        return;
      }
      card.classList.add("on");
      selectedCards.push(card);
      if (selectedCards.length >= 2) {
        console.log("2번 눌렀다");
        document.body.classList.add("blocking");
        if (selectedCards[0].dataset.idx === selectedCards[1].dataset.idx) {
          console.log("정답");
          clearIdx01 = setTimeout(function () {
            selectedCards.splice(0, 2);
            document.body.classList.remove("blocking");
          }, 1000);
          score += 1;
          if (score >= end) {
            console.log("끝");
            //cover 보이게 하기
            cover.classList.add("on");
            //restart 누르면 다시 하기
          }
        } else {
          console.log("땡");
          clearIdx02 = setTimeout(function () {
            selectedCards[0].classList.remove("on");
            selectedCards[1].classList.remove("on");
            selectedCards.splice(0, 2);
            document.body.classList.remove("blocking");
          }, 1000);
        }
      }
    });
  });
  // 게임 시작 시 3초 동안 모든 카드를 볼 수 있게 함
  setTimeout(function () {
    items.forEach(function (item, idx) {
      const card = item.querySelector(".card");
      card.classList.remove("on");
    });
  }, 3000);
  cover.classList.remove("on");
}

const cover = document.querySelector("#cover");
const btnRestart = cover.querySelector("#btnRestart");

btnRestart.addEventListener("click", function () {
  restart();
});
restart();
