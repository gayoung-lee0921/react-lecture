let num = 10;
let people = {
  name: "이가영",
  age: 26,
  say: function () {
    // method
    console.log(this.name + "안녕");
  },
};

let fox = {
  height: 100,
  weight: 20,
};
let wolf = {
  height: 500,
  weight: 700,
};

let calculator = {
  plus(a, b) {
    return a + b + 10;
  },
  minus(a, b) {
    return a - b - 10;
  },
};

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
console.log(calculator.plus(10, 20));
