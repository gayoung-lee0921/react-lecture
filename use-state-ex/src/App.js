// 리액트에선 화면 랜더링(=화면 바꾸려면)을 하려면 반드시 상!태!를 바꿔야 된다 => hook 사용
import "./App.css";
// 리액트에서 hook을 불러오는 방법 - 1
import React, { useState } from "react";

function App() {
  //let num = 10;
  let num02 = 10;
  // 리액트에서 hook을 불러오는 방법 - 2 (화면 갱신 위해 사용)
  const [num, setNum] = useState(10); // useState hook은 상태를 변화시키는 hook, 이 때 num은 변수가 아니라 '상태'이다
  console.log(num); // [10, function] 리턴
  function increase() {
    // num++;
    // console.log(num);
    setNum(num + 1); // num 이란 상태를 바꾸기 위해선 setNum 이란 함수를 이용해서 바꿔야 됨
  }
  // let myName = ""; 그냥 변수
  const [name, setName] = useState(""); // 여기 name 은 상태, useState("") 초기값 빈 공백으로 할당함
  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <h1>{num}</h1>
      <h1>{num02}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button>-</button>
      </div>
      <div>
        <input type="text" onChange={changeName} />
        <div>이름: {name}</div>
      </div>
    </div>
  );
}

export default App;
