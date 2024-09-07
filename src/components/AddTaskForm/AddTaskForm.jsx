import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddTaskForm = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();
    const newTask = inputValue;
    setTodos((prevState) => [
      { id: nanoid(), text: newTask, isDone: false },
      ...prevState,
    ]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleAddTaskForm}>
        <input
          type="text"
          name="text"
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
};
