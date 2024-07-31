import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeValue = (e) => {
    console.log(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <div>
      <input
        className="border border-gray-600"
        type="text"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
