import React, { useRef } from "react";
function TodoInsert({ insertTodoItem }) {
  const todoInput = useRef();
  // function transferInsertTodoItem() {
  //   console.log("click");
  //   insertTodoItem(todoInput.current.value);
  // }

  return (
    <div className="todo-insert">
      <input type="text" placeholder="해야할 일을 입력하세요" ref={todoInput} />
      <button
        onClick={function () {
          insertTodoItem(todoInput.current.value);
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInsert;
