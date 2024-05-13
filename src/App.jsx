import React, { useState } from "react";
import "./App.css";
import Lock from "./lock.jsx";
import Input from "./components/input.jsx";
import PasswordLengthSlider from "./volume";
import Checkbox from "./components/checkbox.jsx";
import lock from "./assets/password.gif";

function App() {
  const [value, setValue] = React.useState(10);

  const [options, setOptions] = useState({
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    SpecialCharacters: false,
  });


  const handleOptionChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "35px",
        borderRadius: "20px",
        width: "630px",
        margin: "0 auto",
      }}
    >
      <img src={lock} alt="" width="134px" height="134px" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>PASSWORD GENERATOR</h2>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Ensure online account safety by creating strong <br />
          and secure passwords
        </p>
      </div>
      <Input options={options} passwordLength={value} />
      <PasswordLengthSlider handleSliderValue={setValue} sliderValue={value}/>
      <Checkbox options={options} onChange={handleOptionChange} />
    </div>
  );
}

export default App;
