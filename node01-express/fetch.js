async function kakaoSearch() {
  const response = await fetch("http://127.0.0.1:8086/year");
  const json = await response.json();
  console.log(json);
}
kakaoSearch();
