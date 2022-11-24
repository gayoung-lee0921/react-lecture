const changeButton = document.querySelector("#change-button");
const block = document.querySelector("#block");
changeButton.addEventListener("click", function () {
  block.style.backgroundColor = "red";
});
