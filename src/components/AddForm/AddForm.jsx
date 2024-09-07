import { useState } from "react";

export const AddForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputText = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleAddForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleAddForm}>
        <input type="text" name="text" onChange={handleInputText} />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};
