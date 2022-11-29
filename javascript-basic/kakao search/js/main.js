async function kakaoSearch(query, category) {
  try {
    const response = await fetch(`http://dapi.kakao.com/v2/search/${category}?query=${query}`, {
      headers: {
        Authorization: "KakaoAK 31057876e2e0a2427ccfd47762ff386d",
      },
    });
    const json = await response.json(); // 넘어온 응답을 json으로 바꾸겠다
    return json;
  } catch (error) {
    return error;
  }
}
// '전지현' 만 검색되게 만드는 방법
const searchWord = document.querySelector("#search-word");
searchWord.addEventListener("keyup", function (e) {
  //console.log(searchWord.value);
  console.log(e.code);
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    kakaoSearch(searchWord.value, "image").then(function (response) {
      //console.log(response);
      const main = document.querySelector("#main");
      main.innerHTML = "";
      const ul = document.createElement("ul");
      main.append(ul);
      const documents = response.documents;
      documents.forEach(function (item, idx) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.image_url}" data-fancybox = "gallery"><img src="${item.thumbnail_url}"></a>`;
        ul.append(li);
      });
      gsap.from("#main ul li", { scale: 0, stagger: { each: 0.05 } });
    });
  }
});

const radios = document.querySelectorAll("#radio-box input");
// console.log(radios);
radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    const category = this.getAttribute("id");

    if (category === "image") {
      kakaoSearch(searchWord.value, "image").then(function (response) {
        const main = document.querySelector("#main");
        main.innerHTML = "";
        const ul = document.createElement("ul");
        main.append(ul);
        const documents = response.documents;
        documents.forEach(function (item, idx) {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.image_url}" data-fancybox = "gallery"><img src="${item.thumbnail_url}"></a>`;
          ul.append(li);
        });
        gsap.from("#main ul li", { scale: 0, stagger: { each: 0.05 } });
      });
    } else if (category === "vclip") {
      kakaoSearch(searchWord.value, "vclip").then(function (response) {
        const main = document.querySelector("#main");
        main.innerHTML = "";
        const ul = document.createElement("ul");
        main.append(ul);
        const documents = response.documents;
        documents.forEach(function (item, idx) {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.url}" data-fancybox = "gallery"><img src="${item.thumbnail}"></a>`;
          ul.append(li);
        });
        gsap.from("#main ul li", { scale: 0, stagger: { each: 0.05 } });
      });
    }
  });
});
// function innerFunc() {
//   const main = document.querySelector("#main");
//   main.innerHTML = "";
//   const ul = document.createElement("ul");
//   main.append(ul);
//   const documents = response.documents;
//   documents.forEach(function (item, idx) {
//     const li = document.createElement("li");
//     li.innerHTML = `<a href = ${}></a>`;
//   });
// }
