import React from "react";
import Option from "./Option";

export default function Checkbox({ onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Option option="Uppercase" setChecked={onChange} />
      <Option option="Lowercase" setChecked={onChange} />
      <Option option="Numbers" setChecked={onChange} />
      <Option option="Special Characters" setChecked={onChange} />
    </div>
  );
}
