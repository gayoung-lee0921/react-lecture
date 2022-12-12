import logo from "./logo.svg";
import "./App.css";
import Library from "./Library";

// const express = require('express') => 모듈 (= 코드 조각)

function App() {
  // jsx는 자바스크립트에서 html을 쉽게 쓰려고 만든거다, 태그들 아님
  return (
    <div className="App">
      <h1>안녕하세요, tis 도서관입니다. 책 목록은 아래와 같습니다.</h1>
      <Library></Library>
    </div>
  );
}

export default App;
