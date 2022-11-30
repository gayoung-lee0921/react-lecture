const search = document.querySelector("#search");
const transBox = document.querySelector("#trans-box");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log(this);
    const searchWord = e.currentTarget.value;
    console.log("searchWord===", searchWord);
    fetch(`papago/${searchWord}`)
      .then((response) => response.json()) // call back을 화살표 함수로 고치면서 return이 생략된 구조....
      .then((response) => {
        console.log(response.message.result.translatedText);
        transBox.textContent = response.message.result.translatedText;
      });
  }
});
