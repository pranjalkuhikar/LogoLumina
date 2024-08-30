import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { Slider } from "./ui/slider";
import { UpdateStorageContext } from "@/context/UpdateStorageContext.js";

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );
  const { setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  });

  return (
    <div>
      <div>
        <div className="py-2">
          <label className="py-2 flex items-center justify-between font-semibold">
            Rounded <span>{rounded}px</span>
          </label>
          <Slider
            defaultValue={[0]}
            max={512}
            step={1}
            onValueChange={(event) => setRounded(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="py-2 flex items-center justify-between font-semibold">
            Padding <span>{padding}px</span>
          </label>
          <Slider
            defaultValue={[40]}
            max={100}
            step={1}
            onValueChange={(event) => setPadding(event[0])}
          />
        </div>
        <div className="py-2 flex flex-col items-start justify-center">
          <label className="py-2 font-semibold">Icon Color</label>
          <ColorPickerController
            hideController={false}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundController;
