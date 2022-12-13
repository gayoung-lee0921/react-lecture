// ref는 리액트에서 dom에 접근할 때 사용하는 속성

import React, { useRef } from "react";

function TodoInsert({ insertTodoItem }) {
  const inputTodo = useRef();
  function transInsertTodoItem() {
    //console.log(inputTodo.current.value); .current는 input 태그를 가르킴

    insertTodoItem(inputTodo.current.value);
    inputTodo.current.value = "";
    inputTodo.current.focus();
  }
  function keyTransInsertTodoItem(e) {
    if (e.keyCode === 13) {
      transInsertTodoItem();
    }
  }

  return (
    <div className="todo-insert">
      <input type="text" ref={inputTodo} onKeyDown={keyTransInsertTodoItem} />
      <button onClick={transInsertTodoItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInsert;
