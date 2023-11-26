import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTodo = (todoName) => {
    const newTodo = { todoName, checked: false };
    setToDoList([...toDoList, newTodo]);
  };
  return (
    <>
      <div className="container">
        <h1>Todo list</h1>
        <TodoInput addTodo={addTodo} />
        <div className="toDoList">
          <span>Todos</span>
          <ul className="list-items">
            {toDoList.map((item) => (
              <TodoItem />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
