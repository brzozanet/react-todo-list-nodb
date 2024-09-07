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

  return (
    <>
      <h1>Do zrobienia</h1>
      <h2>{numberOfTodos} zadania</h2>
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
