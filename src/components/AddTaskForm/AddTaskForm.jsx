import { nanoid } from "nanoid";
import { useState } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

export const AddTaskForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();
    const newTask = inputValue;

    let existingTasks = [];
    todos.forEach((todo) => existingTasks.push(todo.task));

    // NOTE: another solution
    // todos.map((todo) => todo.task);
    // todos.find((todo) => todo.task === newTask)
    //   ? "NIE DODAWAJ"
    //   : "DODAJ NOWY TASK";

    if (existingTasks.includes(newTask)) {
      Notiflix.Notify.failure("Takie zadanie masz już na liście");
    } else {
      setTodos((prevState) => [
        { id: nanoid(), task: newTask, isDone: false },
        ...prevState,
      ]);
      setInputValue("");
      Notiflix.Notify.success("Zadanie zostało dodane do listy");
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
};
