import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const HandleonInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    } else {
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
  };
  return (
    <form onSubmit={onSubmitForm} action="">
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={HandleonInputChange}
      />
    </form>
  );
};
