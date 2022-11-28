// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.splice(3, 1);  인덱스 0이 기리키는 값부터 1개의 값 삭제, 배열로 떨어뜨림
// console.log(array);  배열이 훼손됨

let a = 10;
let b = a;
b = 20;
console.log(a, "===", b); // 10 === 20 출력

/*
기본형(primitive type)과 자료형(reference type)
1. 기본형(=원시 데이터): 숫자, 문자, boolean(true / false), null(아무것도 없음), undefined(정의되지 않음), 값을 할당
2. 자료형(=참조형): array, object / 메모리 주소를 할당, 안에 내용은 모름
*/

// 배열은 참조를 한다.
let tempA = [1, 2, 3];
let tempB = tempA;
tempB.push(4);
tempA.push(5);
console.log(tempA === tempB); // 둘다 [1,2,3,4,5] 출력

let Ong = { name: "이가영", age: 26 }; // Ong 는 객체
let gayoung = Ong;
gayoung.name = "어거영";
console.log(gayoung.name);

//배열 복사 방법
let fruit = ["apple", "kiwi", "banana"];
let myFruit = [...fruit]; // shallow copy(얕은 복사), spread 연산자: ... -  fruit 배열을 복제
myFruit.push("grape");
console.log(myFruit);
console.log(fruit);

let jjang02 = { name: "장성호02", age: 30 };
let sungho02 = { ...jjang02 }; // 분리시켜서 주소가 달라짐
//console.log(jjang02 === sungho02); false, 내용은 같아도 주소가 달라서
jjang02.name = "장동건";
console.log(sungho02.name);
console.log(jjang02.name);

let animals = ["tiger", "lion", "cat"];
let arr01 = [1, 2, 3];
let copyanimals = animals.map(function (item, idx) {
  return "robot-" + item;
}); // map()은 새로운 배열을 돌려줌, 배열에 추가(재가공)하고 싶을 때 사용 <-> spread 연산자는 단순복제

let copyArr02 = arr01.map(function (itme, idx) {
  return itme * 2;
});

console.log(copyArr02);
// 원본 배열을 훼손하지 않음, .map() 랑 .filter()
// filter() : 값을 걸러낼 필요가 있을 때
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 한 줄일 때 화살표 함수 표기법
let oddNums = nums.filter((item, idx) => item % 2 === 1);
let evenNums = nums.filter(function (item, idx) {
  return item % 2 === 0;
});

console.log(oddNums);
console.log(evenNums);

// 배열섞기
let num01 = 10;
let num02 = 20;
let temp = num01;
num01 = num02;
num02 = temp;
console.log(num01, "===", num02);

let arr04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  let selected = Math.floor(Math.random() * arr04.length);
  let temp = arr04[i];
  arr04[i] = arr04[selected];
  arr04[selected] = temp;
}
console.log(arr04);

let nums02 = Array(45) // 배열 자리를 만들어 줌
  .fill() // 값이 들어갈 수 있게 준비, 안에 숫자 넣어주면 해당 숫자로 채워짐
  .map(function (item, idx) {
    return idx + 1; // 인덱스 값 +1 한 값들이 들어감
  });
console.log(nums02);
