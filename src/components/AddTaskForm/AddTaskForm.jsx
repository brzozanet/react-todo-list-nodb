import { useState } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";
import useStore from "../../store/store";

export const AddTaskForm = ({ todos }) => {
  const { addTodo } = useStore();
  const [newTask, setNewTask] = useState("");

  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();

    // some();
    // every();
    // posix (time format);

    if (todos.some(({ task }) => task === newTask)) {
      Notiflix.Notify.failure("Takie zadanie masz już na liście");
    } else {
      addTodo(newTask);
      setNewTask("");
      Notiflix.Notify.success("Zadanie zostało dodane do listy");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTaskForm}>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={handleInputText}
        />
        <button type="submit" disabled={newTask ? false : true}>
          Dodaj
        </button>
      </form>
    </>
  );
};

AddTaskForm.propTypes = {
  todos: PropTypes.array.isRequired,
};
