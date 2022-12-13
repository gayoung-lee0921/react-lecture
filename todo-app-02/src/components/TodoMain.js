import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInsert, { test } from "./TodoInsert";
import React, { useState } from "react";

function TodoMain() {
  // props drilling
  // count값이 고유한 값이 되어야 할거 같다... 자동증가(현재는 못씀)
  // 제일 큰값을 찾아서 그걸 초기 값으로 가지면 겹칠이 없다.
  const initList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  const max = initList.length > 0 ? Math.max(...initList.map((item, idx) => item.id)) : 0;
  const [count, setCount] = useState(max);
  const [todoList, setTodoList] = useState(initList);
  const insertTodoItem = function (todoTxt) {
    //setTodoList([...todoList, { id: count, done: false, title: todoTxt }]);
    const newTodoList = [...todoList, { id: count, done: false, title: todoTxt }];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    //console.log(todoList);
    setCount(count + 1);
  };
  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter((item, idx) => item.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };
  const modifyTodoItem = (id) => {
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <Header />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} modifyTodoItem={modifyTodoItem} />
      <Footer />
    </>
  );
}

export default TodoMain;
