import React, { useState } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import ReCAPTCHA from "react-google-recaptcha";
// import 'dotenv/config'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [token,setToken] = useState('');
  function onChange(recaptchaToken:any) {
    console.log("Captcha value:", recaptchaToken);
    setToken(recaptchaToken)
  }

  const handleButtonClick = () => {
    console.log(formData, token)

  };
  return (
    <div className="App">
      <CustomInput
        type="text"
        placeholder="Enter name"
        value={formData.fullName}
        onChange={(event)=>{
          const value = event.target.value
          setFormData((prevData) => ({
            ...prevData,
            fullName: value,
          }));
        }}
      />
      <CustomInput
        type="text"
        placeholder="Enter email"
        value={formData.email}
        onChange={(event)=>{
          const value = event.target.value
          setFormData((prevData) => ({
            ...prevData,
            email: value,
          }));
        }}
      />
      <CustomInput
        type="text"
        placeholder="Enter password"
        value={formData.password}
        onChange={(event)=>{
          const value = event.target.value
          setFormData((prevData) => ({
            ...prevData,
            password: value,
          }));
        }}
      />
      <ReCAPTCHA sitekey={'6LeZWGsqAAAAAKNfKYOckZCzCabYAyZMqHKJUy8j'} onChange={onChange}/>,
      <CustomButton onClick={handleButtonClick} label="Submit" disabled={!token} />
    </div>
  );
}

export default App;
