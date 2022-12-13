import React from "react";
import TodoItem from "./TodoItem";

// 구조 분해 할당 function TodoList({ todos })
function TodoList({ todoList, deleteTodoItem, modifyTodoItem }) {
  //deleteTodoList(1);
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} done={item.done} key={item.id} deleteTodoItem={deleteTodoItem} id={item.id} modifyTodoItem={modifyTodoItem}></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
