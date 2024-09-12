import Notiflix from "notiflix";
import PropTypes from "prop-types";
import css from "./TodoItem.module.css";

export const TodoItem = ({ id, task, isDone, todos, setTodos }) => {
  const handleTaskDeleteClick = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno chcesz usunąć to zadanie?",
      "Tak",
      "Nie",
      function yes() {
        setTodos(filteredTodos);
        Notiflix.Notify.success("Zadanie zostało usunięte");
      },
      function no() {
        return;
      },
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  const handleMarkAsDoneClick = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });

    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno oznaczyc to zadanie jako zrobione?",
      "Tak",
      "Nie",
      function yes() {
        setTodos(updatedTodos);
        Notiflix.Notify.success("Zadanie zostało oznaczone jako zrobione");
      },
      function no() {
        return;
      },
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  return (
    <>
      <hr />
      <p className={css.task}>{task}</p>
      {!isDone && <button onClick={handleMarkAsDoneClick}>Zrobione</button>}
      <button onClick={handleTaskDeleteClick}>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
