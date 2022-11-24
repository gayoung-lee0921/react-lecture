const comlist = document.querySelectorAll("#com ul li");
const playerlist = document.querySelectorAll("#player ul li");

function mychoice() {
  playerlist.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      clearInterval(clear);
    });
  });
}

function choice() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  comlist.forEach(function (item, idx) {
    if (idx === random) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
let clear = setInterval(choice, 50);
mychoice();
