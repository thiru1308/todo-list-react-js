import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { Footer } from "./components/Footer";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTodo = (todoName) => {
    const newTodo = { todoName, checked: false };
    setToDoList([...toDoList, newTodo]);
  };
  function deleteTodo(deleteTodoName) {
    setToDoList(toDoList.filter((todo) => todo.todoName !== deleteTodoName));
  }
  function toggleCheck(todoName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((todo) =>
        todo.todoName === todoName ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  return (
    <>
      <div className="container">
        <h1>Todo list</h1>
        <TodoInput addTodo={addTodo} />
        <div className="toDoList">
          <span>Todos</span>
          <ul className="list-items">
            {toDoList.map((todo, key) => (
              <TodoItem
                todo={todo}
                key={todo}
                deleteTodo={deleteTodo}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Footer toDoList={toDoList} />
    </>
  );
}

export default App;
