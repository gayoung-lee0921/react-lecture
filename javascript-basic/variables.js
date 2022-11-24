let puppy = "gorgeous";
{
  let puppy = "cute";
  puppy = "pretty";
}

console.log(puppy);

var cat = "앙칼";
{
  var cat = "짱짱";
}
console.log(cat);

function mareCat() {
  var fcat = "나는 function";
  console.log(fcat);
}

// 함수 선언문(function declation)
function plus() {
  console.log("나는 죽어서 10을 남길거다");
  return 10;
}

function parent() {
  console.log("ㅎㅇㅎㅇ");
  return 1000000000;
  console.log("나는 return 밑에 있어서  출력되지 않는다.");
}
console.log(parent());
console.log(plus());

// closure
function outer() {
  var a = "A";
  var b = "B";
  function inner() {
    var a = "AA";
    console.log(b);
  }
  //   inner();
  //   console.log(a);
  return inner;
}
var outerFunc = outer();
outerFunc();

function outer02(name) {
  let say = name + "안녕";
  return function () {
    return say;
  };
  //   console.log(say);
}

say01 = outer02("이가영");
console.log(say01());
