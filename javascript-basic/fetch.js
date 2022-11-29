/*
fetch("http://dapi.kakao.com/v2/search/image?query=전지현", {
  headers: {
    Authorization: "KakaoAK 31057876e2e0a2427ccfd47762ff386d",
  },
}).then(function (response) {
  const json = response.json();
  json.then(function (response) {
    console.log(response);
  });
});
*/
/*
fetch("http://dapi.kakao.com/v2/search/image?query=전지현", {
  headers: {
    Authorization: "KakaoAK 31057876e2e0a2427ccfd47762ff386d",
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
*/
async function kakoImgSearch(query) {
  const response = await fetch(`http://dapi.kakao.com/v2/search/image?query=${query}`, {
    headers: {
      Authorization: "KakaoAK 31057876e2e0a2427ccfd47762ff386d",
    },
  });
  const json = response.json();
  return json;
}
kakoImgSearch("전지현").then(function (response) {
  console.log(response);
});
