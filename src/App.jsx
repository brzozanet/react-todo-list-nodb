import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TodoList } from "./components/TodoList/TodoList";
import { todosDatabase } from "./database/todos";
import css from "./App.module.css";

function App() {
  const [todos, setTodos] = useState(todosDatabase);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleIsFormVisibleClick = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  let numberOfTodosText;
  if (todos.length === 0) {
    numberOfTodosText = "zadań";
  } else if (todos.length === 1) {
    numberOfTodosText = "zadanie";
  } else if (todos.length < 5) {
    numberOfTodosText = "zadania";
  } else {
    numberOfTodosText = "zadań";
  }

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Do zrobienia</h1>
        <h2 className={css.subtitle}>
          {todos.length} {numberOfTodosText}
        </h2>
        {isFormVisible ? (
          <AddTaskForm todos={todos} setTodos={setTodos} />
        ) : (
          <button onClick={handleIsFormVisibleClick}>Dodaj zadanie</button>
        )}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
