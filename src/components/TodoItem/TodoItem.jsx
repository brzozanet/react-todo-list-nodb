import PropTypes from "prop-types";

export const TodoItem = ({ id, task, todos, setTodos }) => {
  const handleTaskDeleteClick = () => {
    console.log(id);
    console.log(todos);
    const filteredTodos = todos.filter((todo) => todo.id != id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
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
};
