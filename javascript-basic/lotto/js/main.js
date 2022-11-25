const result = document.querySelector("#result");
const radios = document.querySelectorAll(".radio");
const colors = ["yellow", "blue", "red", "gray", "green"];

//로또 생성 함수
function makeLotto() {
  const ul = document.createElement("ul");
  result.appendChild(ul);
  const nums = Array(45) //45개 배열 생성
    .fill(10) //채우겠다
    .map(function (current, idx) {
      return idx + 1;
    });

  const selectedNums = [];

  for (let i = 0; i < 6; i++) {
    const selected = Math.floor(Math.random() * nums.length);
    selectedNums.push(nums.splice(selected, 1).pop());
  }
  selectedNums.sort(compare);
  selectedNums.forEach(function (item, idx) {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add(colors[Math.ceil(item / 10) - 1]);
    /*
  if (item >= 1 && item <= 10) {
    li.classList.add(colors[0]);
  } else if (item >= 11 && item <= 20) {
    li.classList.add(colors[1]);
  } else if (item >= 21 && item <= 30) {
    li.classList.add(colors[2]);
  } else if (item >= 31 && item <= 40) {
    li.classList.add(colors[3]);
  } else {
    li.classList.add(colors[4]);
  }
  */
    ul.appendChild(li);
  });
}

radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    // result 안에 모든 내용들을 지움
    result.innerHTML = "";
    for (let i = 0; i < idx + 1; i++) {
      makeLotto();
    }
  });
});

// 오름차순
function compare(a, b) {
  // if (a > b) return 1;
  // else if (a < b) return -1;
  // else return 0;
  return a - b;
}
