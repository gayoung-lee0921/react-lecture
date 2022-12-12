import React from "react";

function TodoItem(props) {
  return (
    <li>
      <div className={`${props.done ? "done" : ""} item`}>
        {/* <input type="checkbox" checked={props.done} /> */}
        <input type="checkbox" defaultChecked={props.done} />
        <p>{props.title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="btn-del">
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
