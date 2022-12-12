import React from "react";

function TodoInsert({ insertTodoItem }) {
  function insertTodo() {
    console.log("할일을 추가했습니다");
  }
  //props.insertTodoItem();
  return (
    <div className="todo-insert">
      <input type="text" />
      <button onClick={insertTodoItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInsert;
