import PropTypes from "prop-types";

export const TodoItem = ({ task }) => {
  return (
    <>
      <hr />
      <p>{task}</p>
      <button>Zrobione</button>
      <button>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
};
