import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddTaskForm = ({ setTodos, setNumberOfTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();
    const newTask = inputValue;
    setTodos((prevState) => [
      { id: nanoid(), task: newTask, isDone: false },
      ...prevState,
    ]);
    setNumberOfTodos((prevState) => prevState + 1);
    setInputValue("");
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
  setTodos: PropTypes.func.isRequired,
  setNumberOfTodos: PropTypes.func.isRequired,
};
