import React, { useState } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };
  return (
    <div className="App">
      <CustomInput
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <CustomButton
        onClick={handleButtonClick}
        label="Submit"
      />
    </div>
  );
}

export default App;
