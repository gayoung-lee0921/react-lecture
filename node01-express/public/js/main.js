/*fetch("https://openapi.naver.com/v1/search/movie.json?query=한산", {
  headers: {
    "X-Naver-Client-Id": "aNajtYTUjHtnXMO9ExzS",
    "X-Naver-Client-Secret": "mKwOLitOQ1",
  },
}).then((response) => {
  const json = response.json();
  json.then((response) => {
    console.log(response);
  });
});*/

const search = document.querySelector("#search");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log(this); //window
    const searchWord = e.currentTarget.value;
    console.log("searchWord ===", searchWord);
    fetch(`movie02/${searchWord}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }
});

// this는 누가 호출하느냐에 따라 값이 바뀐다
