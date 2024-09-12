import PropTypes from "prop-types";

export const TodoItem = ({ id, task, isDone, todos, setTodos }) => {
  const handleTaskDeleteClick = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    alert("Zadanie zostało usunięte");
  };

  const handleMarkAsDoneClick = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
    alert("Zadanie zostało oznaczone jako zrobione");
  };

  return (
    <>
      <hr />
      <p>{task}</p>
      {!isDone && <button onClick={handleMarkAsDoneClick}>Zrobione</button>}
      <button onClick={handleTaskDeleteClick}>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
