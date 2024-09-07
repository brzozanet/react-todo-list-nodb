import PropTypes from "prop-types";

export const TodoItem = ({ text }) => {
  return (
    <>
      <hr />
      <p>{text}</p>
      <button>Zrobione</button>
      <button>Usuń</button>
    </>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
};
