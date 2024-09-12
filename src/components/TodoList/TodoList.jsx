import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos, setTodos }) => {
  const todoListElement = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      task={todo.task}
      isDone={todo.isDone}
      todos={todos}
      setTodos={setTodos}
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
