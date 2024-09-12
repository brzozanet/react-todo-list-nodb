import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddTaskForm = ({ todos, setTodos, setNumberOfTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();
    const newTask = inputValue;

    let existingTasks = [];
    todos.forEach((todo) => existingTasks.push(todo.task));

    if (existingTasks.includes(newTask)) {
      alert("Takie zadanie masz już na liście");
    } else {
      setTodos((prevState) => [
        { id: nanoid(), task: newTask, isDone: false },
        ...prevState,
      ]);
      setNumberOfTodos((prevState) => prevState + 1);
      setInputValue("");
      alert("Zadanie zostało dodane do listy");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTaskForm}>
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleInputText}
        />
        <button type="submit" disabled={inputValue ? false : true}>
          Dodaj
        </button>
      </form>
    </>
  );
};

AddTaskForm.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setNumberOfTodos: PropTypes.func.isRequired,
};
