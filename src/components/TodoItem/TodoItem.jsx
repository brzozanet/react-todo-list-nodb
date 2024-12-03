import Notiflix from "notiflix";
import PropTypes from "prop-types";
import useStore from "../../store/store";
import css from "./TodoItem.module.css";
import { useState } from "react";

export const TodoItem = ({ id, task, isDone, isEdited }) => {
  const [newTask, setNewTask] = useState(task);
  const { deleteTodo, markAsDone, toggleTaskEdit, editTodo } = useStore();

  const handleTaskDeleteClick = () => {
    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno chcesz usunąć to zadanie?",
      "Tak",
      "Nie",
      function yes() {
        deleteTodo(id);
        Notiflix.Notify.success("Zadanie zostało usunięte");
      },
      function no() {
        return;
      },
      {
        width: "400px",
        borderRadius: "8px",
      }
    );
  };

  const handleMarkAsDoneClick = () => {
    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno oznaczyć to zadanie jako zrobione?",
      "Tak",
      "Nie",
      function yes() {
        markAsDone(id);
        Notiflix.Notify.success("Zadanie zostało oznaczone jako zrobione");
      },
      function no() {
        return;
      },
      {
        width: "400px",
        borderRadius: "8px",
      }
    );
  };

  return (
    <>
      <hr />
      {isEdited ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button onClick={() => editTodo(id, newTask)}>Potwiedź</button>
          <button onClick={() => toggleTaskEdit(id)}>Anuluj</button>
        </>
      ) : (
        <>
          <p className={isDone ? css.taskDone : css.task}>{task}</p>
          {!isDone && <button onClick={handleMarkAsDoneClick}>Zrobione</button>}
          <button onClick={() => toggleTaskEdit(id)}>Edytuj</button>
          <button onClick={handleTaskDeleteClick}>Usuń</button>
        </>
      )}
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isEdited: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};
