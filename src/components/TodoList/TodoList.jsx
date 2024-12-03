import { TodoItem } from "../TodoItem/TodoItem";
import useStore from "../../store/store";
import PropTypes from "prop-types";

export const TodoList = () => {
  const { todos } = useStore();

  const todoListElement = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      task={todo.task}
      isDone={todo.isDone}
      isEdited={todo.isEdited}
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
