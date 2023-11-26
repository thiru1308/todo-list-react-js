import React from "react";
import { MdDelete } from "react-icons/md";

export const TodoItem = () => {
  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        <p>item</p>
      </div>
      <MdDelete className="delete-icon" />
    </li>
  );
};
