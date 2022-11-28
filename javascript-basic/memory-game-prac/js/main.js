const list = [
  { idx: 0, title: "mouse", img: "images/12jisin/mouse.svg" },
  { idx: 1, title: "cow", img: "images/12jisin/cow.svg" },
  { idx: 2, title: "tiger", img: "images/12jisin/tiger.svg" },
  { idx: 3, title: "rabbit", img: "images/12jisin/rabbit.svg" },
  { idx: 4, title: "dragon", img: "images/12jisin/dragon.svg" },
  { idx: 5, title: "snake", img: "images/12jisin/snake.svg" },
  { idx: 6, title: "horse", img: "images/12jisin/horse.svg" },
  { idx: 7, title: "sheep", img: "images/12jisin/sheep.svg" },
  { idx: 8, title: "monkey", img: "images/12jisin/monkey.svg" },
  { idx: 9, title: "chicken", img: "images/12jisin/chicken.svg" },
  { idx: 10, title: "dog", img: "images/12jisin/dog.svg" },
  { idx: 11, title: "pig", img: "images/12jisin/pig.svg" },
];

const main = document.querySelector("#main");
const doubleList = [...list, ...list];

// console.log(list);
// console.log(doubleList);
const ul = document.createElement("ul");
