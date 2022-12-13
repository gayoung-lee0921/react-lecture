import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

function TodoMain() {
  // 리액트에서 제일 힘든거 => 데이터 전달하기, 그래서 나온게 redux 이다/

  // 리액트는 변수를 바꾸는 걸로 화면을 렌더링하지 않는다, 상태를 바꿔야 변경이 가능해짐
  // <local db 이용하는 방법>

  //const initTodoList = JSON.parse(localStorage.getItem("todoList"));
  const initTodoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  // const [상태를 표시하는 변수, 상태를 변경하는 함수] = useState(), 화면을 바꾸려면 useState()를 써야된다
  const [todoList, setTodoList] = useState(initTodoList);
  const [count, setCount] = useState(todoList.length);

  const insertTodoItem = (_title) => {
    setCount(count + 1);
    setTodoList([...todoList, { id: count, done: false, title: _title }]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, { id: count, done: false, title: _title }]));
  };
  function changeState() {
    console.log("change");
  }
  // const testObj = { name: "이가영", age: 20, weight: 50 };
  // const newObj = { ...testObj };  그래서 ...해서 흩뿌려줘야됨, 기존 객체를 흩뿌려서 새로운 객체로 만들겠다
  // newObj.age = 40;  객체와 배열은 참조한다
  // console.log(testObj.age);
  // console.log(testObj.age === newObj.age); false 출력

  function modifyTodoList(id) {
    // .map()은 배열의 반복문
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done; // true / false 값 왔다갔다 하게
      }
      return item;
      //return item.id === id ? { ...item, done: true } : item;
    });
    //setTodoList(newTodoList);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }
  const deleteTodoList = (id) => {
    const newTodoList = todoList.filter((item, idx) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  // const fruits = ["kiwi", "apple", " mango"];
  // const selectedfruits = fruits.filter((item, idx) => {
  //   return item !== "apple";
  // });
  // console.log(selectedfruits);

  return (
    <>
      <Header title="TODO-APP" />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todos={todoList} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList} />
      <Footer />
    </>
  );
}

export default TodoMain;
