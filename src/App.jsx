import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TodoList } from "./components/TodoList/TodoList";
import { todosDatabase } from "./database/todos";

function App() {
  const [todos, setTodos] = useState(todosDatabase);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [numberOfTodos, setNumberOfTodos] = useState(todosDatabase.length);

  const handleIsFormVisibleClick = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  let numberOfTodosText;

  if (numberOfTodos === 0) {
    numberOfTodosText = "zadań";
  } else if (numberOfTodos === 1) {
    numberOfTodosText = "zadanie";
  } else if (numberOfTodos < 5) {
    numberOfTodosText = "zadania";
  } else {
    numberOfTodosText = "zadań";
  }

  return (
    <>
      <h1>Do zrobienia</h1>
      <h2>
        {numberOfTodos} {numberOfTodosText}
      </h2>
      {isFormVisible ? (
        <AddTaskForm setTodos={setTodos} setNumberOfTodos={setNumberOfTodos} />
      ) : (
        <button onClick={handleIsFormVisibleClick}>Dodaj zadanie</button>
      )}
      <TodoList todos={todos} />
    </>
  );
}

export default App;
