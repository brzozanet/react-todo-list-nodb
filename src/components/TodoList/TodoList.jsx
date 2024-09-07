import { nanoid } from "nanoid";
import { TodoItem } from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos, setTodos, setNumberOfTodos }) => {
  console.log(todos);

  const todoListElement = todos.map((todo) => (
    <TodoItem
      id={todo.id}
      task={todo.task}
      isDone={todo.isDone}
      todos={todos}
      setTodos={setTodos}
      setNumberOfTodos={setNumberOfTodos}
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
  setNumberOfTodos: PropTypes.func.isRequired,
};
