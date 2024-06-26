import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  return `${value} `;
}

function calculateValue(value) {
  return value;
}

export default function PasswordLengthSlider({handleSliderValue,sliderValue}) {

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      handleSliderValue(newValue);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography id="password-length-slider" gutterBottom>
        Password Length: {valueLabelFormat(sliderValue)}
      </Typography>
      <Slider
        value={sliderValue}
        min={5}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="password-length-slider"
        sx={{
          color: "#35CFD0", // Set color to #35CFD0
        }}
      />
    </Box>
  );
}
