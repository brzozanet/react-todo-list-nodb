import { nanoid } from "nanoid";
import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos }) => {
  console.log(todos);

  const todoListElement = todos.map((todo) => (
    <TodoItem task={todo.task} key={nanoid()} />
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
