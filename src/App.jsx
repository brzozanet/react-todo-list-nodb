import { useState } from "react";
import { AddForm } from "./components/AddForm/AddForm";
import { TodoList } from "./components/TodoList/TodoList";
import { todosDatabase } from "./database/todos";

function App() {
  const [todos, setTodos] = useState(todosDatabase);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleIsFormVisibleClick = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <>
      <h1>Do zrobienia</h1>
      <h2>{todosDatabase.length} zadania</h2>
      {isFormVisible ? (
        <AddForm />
      ) : (
        <button onClick={handleIsFormVisibleClick}>Dodaj zadanie</button>
      )}
      <TodoList todos={todos} />
    </>
  );
}

export default App;
