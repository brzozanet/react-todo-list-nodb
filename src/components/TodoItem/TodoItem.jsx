import PropTypes from "prop-types";

export const TodoItem = ({
  id,
  task,
  isDone,
  todos,
  setTodos,
  setNumberOfTodos,
}) => {
  const handleTaskDeleteClick = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    setNumberOfTodos((prevState) => prevState - 1);
  };

  const handleMarkAsDoneClick = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
    console.log("updatedTodos:");
    console.log(updatedTodos);
    console.log("setTodos:");
    console.log(todos);
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
  setNumberOfTodos: PropTypes.func.isRequired,
};
