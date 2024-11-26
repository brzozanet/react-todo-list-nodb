import Notiflix from "notiflix";
import PropTypes from "prop-types";
import useStore from "../../store/store";
import css from "./TodoItem.module.css";

export const TodoItem = ({ id, task, isDone }) => {
  const { deleteTodo, editTodo, markAsDone } = useStore();

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

  const handleEditTaskClick = () => {
    editTodo(id, task);
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
      <p className={isDone ? css.taskDone : css.task}>{task}</p>
      {!isDone && <button onClick={handleMarkAsDoneClick}>Zrobione</button>}
      <button onClick={handleEditTaskClick}>Edytuj</button>
      <button onClick={handleTaskDeleteClick}>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};
