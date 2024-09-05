import { nanoid } from "nanoid";
import { todos } from "../../database/todos";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const todoListElement = todos.map((todo) => (
    <TodoItem text={todo.text} key={nanoid()} />
  ));

  return (
    <>
      <div>{todoListElement}</div>
    </>
  );
};
