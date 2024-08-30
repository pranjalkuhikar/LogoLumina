/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false, selectedColor }) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <ColorPicker
      value={color}
      onChange={(e) => {
        setColor(e);
        selectedColor(e);
      }}
      className="rounded-lg"
      hideControls={hideController}
      hideEyeDrop
      hideAdvancedSliders
      hideColorGuide
      hideInputType
    />
  );
};

export default ColorPickerController;
