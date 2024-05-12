import React from "react";
import Option from "./Option";

export default function Checkbox({ options, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Option
        option="Uppercase"
        checked={options.Uppercase}
        setChecked={(value) => onChange("Uppercase", value)}
      />
      <Option
        option="Lowercase"
        checked={options.Lowercase}
        setChecked={(value) => onChange("Lowercase", value)}
      />
      <Option
        option="Numbers"
        checked={options.Numbers}
        setChecked={(value) => onChange("Numbers", value)}
      />
      <Option
        option="Special Characters"
        checked={options.SpecialCharacters}
        setChecked={(value) => onChange("SpecialCharacters", value)}
      />
    </div>
  );
}
