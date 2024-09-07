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
  };

  return (
    <>
      <form onSubmit={handleAddTaskForm}>
        <input type="text" name="text" onChange={handleInputText} />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};

AddTaskForm.propTypes = {
  setTodos: PropTypes.array.isRequired,
};
