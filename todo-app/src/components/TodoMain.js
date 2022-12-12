import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

function TodoMain() {
  // 리액트에서 제일 힘든거 => 데이터 전달하기, 그래서 나온게 redux 이다/

  // 리액트는 변수를 바꾸는 걸로 화면을 렌더링하지 않는다, 상태를 바꿔야 변경이 가능해짐
  const initTodoList = [
    { id: 0, done: true, title: "점심먹기" },
    { id: 1, done: false, title: "저녁먹기" },
    { id: 2, done: false, title: "야식먹기" },
    { id: 3, done: true, title: "축구보기" },
    //{ id: 4, done: false, title: "리액트 복습하기" },
  ];
  // const [상태를 표시하는 변수, 상태를 변경하는 함수] = useState(), 화면을 바꾸려면 useState()를 써야된다
  const [todoList, setTodoList] = useState(initTodoList);
  //console.log(...todoList);
  const insertTodoItem = () => {
    setTodoList([...todoList, { id: 4, done: false, title: "리액트 복습하기" }]);
  };

  return (
    <>
      <Header />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todos={todoList} title="안녕" msg="메시지" />
      <Footer />
    </>
  );
}

export default TodoMain;
