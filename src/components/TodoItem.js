import React from "react";
import { MdDelete } from "react-icons/md";

export const TodoItem = ({ todo, deleteTodo, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => toggleCheck(todo.todoName)}
        />
        <p className={todo.checked ? "isChecked" : ""}>{todo.todoName}</p>
      </div>
      <MdDelete
        className="delete-icon"
        onClick={() => deleteTodo(todo.todoName)}
      />
    </li>
  );
};
