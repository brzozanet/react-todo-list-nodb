import { AddButton } from "./components/AddButton/AddButton";
import { TodoList } from "./components/TodoList/TodoList";
import { todos } from "./database/todos";

function App() {
  return (
    <>
      <h1>Do zrobienia</h1>
      <h2>{todos.length} zadania</h2>
      <AddButton />
      <TodoList />
    </>
  );
}

export default App;
