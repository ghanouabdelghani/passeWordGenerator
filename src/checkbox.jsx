import React from "react";

export default function Checkbox() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{
              marginRight: "8px",
              border: "solid 2px red",
              borderRadius: "30px",
              boxShadow: "2px 1px 3px 0px red  ",
            }}
          />
          <p>Uppercase</p>
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "8px", color: "blue" }}
          />
          <p>Lowercase</p>
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "8px", color: "blue" }}
          />
          <p>Numbers</p>
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "8px", color: "blue" }}
          />
          <p>Special Characters</p>
        </label>
      </div>
    </div>
  );
}
