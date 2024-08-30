/* eslint-disable react/prop-types */
import { useState } from "react";
import BackgroundController from "./BackgroundController";
import IconController from "./IconController";
import LogoPreview from "./LogoPreview";
import { Image, PencilLine } from "lucide-react";

const Body = ({ downloadIcon }) => {
  const menuList = [
    { name: "Icon", icon: PencilLine },
    {
      name: "Background",
      icon: Image,
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="w-full sm:h-screen h-fit sm:flex sm:flex-row flex-col mt-4 sm:px-10 px-3">
      <div className="sm:w-[70%] w-full h-full shadow-xl mr-10 mb-10 border border-gray-100 rounded-lg">
        <LogoPreview downloadIcon={downloadIcon} />
      </div>
      <div className="sm:w-[30%] w-full h-full border border-gray-100 rounded-lg shadow-xl p-8 overflow-auto ">
        <div className="flex items-center justify-center gap-14 mt-5 mb-5">
          {menuList.map((menu, index) => (
            <div
              className={`flex items-center justify-center gap-1 cursor-pointer font-semibold text-md tracking-tight hover:bg-primary px-4 py-2 rounded-lg hover:text-white transition-all hover:dark:text-black ${
                active == index && "bg-primary text-white dark:text-black"
              }`}
              onClick={() => {
                setActive(index);
              }}
              key={index}
            >
              <menu.icon />
              {menu.name}
            </div>
          ))}
        </div>
        {active == 0 ? <IconController /> : <BackgroundController />}
      </div>
    </div>
  );
};

export default Body;
