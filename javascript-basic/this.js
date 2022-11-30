function jegop(number) {
  console.log(arguments);
  console.log(this);
  return number * number;
}
//jegop(10);

const foo = function () {
  console.log(this);
};
foo();

const myObj = { myFoo: foo };
myObj.myFoo();

const myObj01 = {
  name: "이가영",
  sayName: () => {
    console.log(this);
  },
};
const myObj02 = {
  name: "김영광",
};
myObj02.sayName = myObj01.sayName;
myObj01.sayName(); //장성호
myObj02.sayName(); //김영광

// function() 에서 this는 누가 호출을 하느냐에 따라 달라짐
// () => 에서 this는 선언될 때 결정됨
