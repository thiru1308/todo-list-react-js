import React, { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  function handleInputValue(event) {
    setTodo(event.target.value);
  }
  function handleAddToDo(event) {
    event.preventDefault();
    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo("");
  }
  return (
    <form className="inputField" onSubmit={handleAddToDo}>
      <input
        type="text"
        value={todo}
        placeholder="Add item..."
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};
