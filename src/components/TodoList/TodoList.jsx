import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos }) => {
  const todoListElement = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      task={todo.task}
      isDone={todo.isDone}
      todos={todos}
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
};
