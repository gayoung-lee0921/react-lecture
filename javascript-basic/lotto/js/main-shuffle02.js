const result = document.querySelector("#result");
const radios = document.querySelectorAll(".radio");
const colors = ["yellow", "blue", "red", "gray", "green"];

const nums = Array(45)
  .fill()
  .map(function (current, idx) {
    return idx + 1;
  });
//로또 생성 함수
function makeLotto() {
  const ul = document.createElement("ul");
  result.appendChild(ul);
  setTimeout(function () {
    result.classList.add("on");
  });
  const copyNums = [...nums];
  //   for (let i = 0; i < copyNums.length; i++) {
  //     let selected = Math.floor(Math.random() * copyNums.length);
  //     let temp = copyNums[i];
  //     copyNums[i] = copyNums[selected];
  //     copyNums[selected] = temp;
  //   }
  copyNums.shuffle();
  console.log(copyNums);
  const selectedNums = copyNums.splice(0, 6);
  console.log(selectedNums);

  selectedNums.sort(compare);
  selectedNums.forEach(function (item, idx) {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add(colors[Math.ceil(item / 10) - 1]);
    ul.appendChild(li);
  });
}

radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    result.innerHTML = "";
    for (let i = 0; i < idx + 1; i++) {
      makeLotto();
    }
  });
});

// shuffle이란 method를 임시로 만들겠다는 의미
Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let selected = Math.floor(Math.random() * this.length);
    let temp = this[i];
    this[i] = this[selected];
    this[selected] = temp;
  }
  return this;
};
const arr = ["양효정", "이가영", "박아영", "심지혜", "이서현", "신태식"];
console.log(arr.shuffle());

function compare(a, b) {
  return a - b;
}
