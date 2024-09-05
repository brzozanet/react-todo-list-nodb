import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const TodoItem = ({ text }) => {
  return (
    <>
      <hr />
      <p>{text}</p>
      <Button>Zrobione</Button>
      <Button>Usuń</Button>
    </>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
};
