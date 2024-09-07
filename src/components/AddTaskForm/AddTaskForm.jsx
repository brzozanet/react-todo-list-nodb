import { nanoid } from "nanoid";
import { useState } from "react";

export const AddTaskForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();
    const newTask = inputValue;
    console.log(newTask);
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
