import PropTypes from "prop-types";

export const TodoItem = ({ id, task, todos, setTodos, setNumberOfTodos }) => {
  const handleTaskDeleteClick = () => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
    setNumberOfTodos((prevState) => prevState - 1);
  };

  return (
    <>
      <hr />
      <p>{task}</p>
      <button>Zrobione</button>
      <button onClick={handleTaskDeleteClick}>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setNumberOfTodos: PropTypes.func.isRequired,
};
