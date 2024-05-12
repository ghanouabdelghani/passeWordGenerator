import React, { useState } from "react";
import "./App.css";
import Lock from "./lock.jsx";
import Input from "./input";
import Volume from "./volume";
import Checkbox from "./checkbox";
function App() {
  return (
    <div>
      <Lock />
      <div>
        <p>PASSEWORD GENERATOR</p>
        <p>
          Ensure online account safety by creating strong <br />
          and secure passwords
        </p>
      </div>
      <Input />
      <Volume />
      <Checkbox />
    </div>
  );
}

export default App;
