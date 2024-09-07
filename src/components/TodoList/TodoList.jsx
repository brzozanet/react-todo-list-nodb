import { nanoid } from "nanoid";
import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos, setTodos }) => {
  console.log(todos);

  const todoListElement = todos.map((todo) => (
    <TodoItem
      id={todo.id}
      task={todo.task}
      todos={todos}
      setTodos={setTodos}
      key={nanoid()}
    />
  ));

  return (
    <>
      <div>{todoListElement}</div>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
