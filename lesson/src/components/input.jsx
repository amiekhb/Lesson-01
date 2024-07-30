import { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
        className="border border-gray-600"
        type="text"
        onchange={handleChange}
      />
      <p>Search Value:{searchValue}</p>
    </div>
  );
};

export default Input;
