/* eslint-disable react/prop-types */
import { UpdateStorageContext } from "@/context/UpdateStorageContext.js";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);
  const rotate = (angle) => `rotate(${angle}deg)`;
  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);
  const downloadPngLogo = () => {
    const downloadLogo = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogo, {
      backgroundColor: "null",
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  };

  return (
    <div className="flex items-center justify-center sm:h-full h-fit p-10 sm:p-0 shadow-lg px-5 sm:px-0">
      <div
        className="sm:h-[500px] sm:w-[500px] h-96 w-96 bg-gray-200 outline-dotted rounded-lg outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              src={"/png/" + storageValue?.icon}
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
                transform: `${rotate(storageValue?.iconRotate)}`,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
