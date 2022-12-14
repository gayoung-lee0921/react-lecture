import React from "react";

function TodoItem({ done, title, modifyTodoList, deleteTodoList, id }) {
  function changeDone() {
    modifyTodoList(id);
  }
  function deleteItem() {
    deleteTodoList(id);
  }

  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        {/* <input type="checkbox" checked={props.done} /> */}
        <input type="checkbox" defaultChecked={done} onChange={changeDone} />
        <p>{title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="btn-del" onClick={deleteItem}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
