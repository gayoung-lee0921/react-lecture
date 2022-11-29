/*fetch() : json 파일을 jquery 없이 불러올 수 있게 하는 함수
const result = fetch(`https://jsonplaceholder.typicode.com/posts/10`);
//console.log(result);
result.then(function (response) {
  const json = response.json();
  json.then(function (response) {
    const userId = response.userId;
    const userJson = fetch(`https://jsonplaceholder.typicode.com/userId/${userId}`);
    userJson.then(function (response) {
      const userInfoJson = response.json();
      userInfoJson.then(function (response) {
        console.log(response.name);
      });
    });
  });
});*/
// 비동기의 동기화
async function findUserName(postId) {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await postResponse.json();
  //console.log(post);
  const userId = post.userId;
  //console.log(userId);
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = userResponse.json();
  console.log("user ===", user);
  return user;
}

findUserName(2).then(function (resolve, reject) {
  console.log(resolve.address.city);
});
