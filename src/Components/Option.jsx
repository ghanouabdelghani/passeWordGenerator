import React from "react";

const Option = ({ option, checked, setChecked }) => {
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "8px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>{option} </label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        style={{
          marginRight: "8px",
          border: "solid 2px red",
          borderRadius: "30px",
          boxShadow: "2px 1px 3px 0px red",
        }}
      />
    </div>
  );
};

export default Option;
