/* eslint-disable react/prop-types */
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = ({ DownloadIcon }) => {
  return (
    <div>
      <div className="p-4 shadow-sm border flex items-center justify-between">
        <div className="flex items-center gap-1 font-bold tracking-tighter text-2xl sm:text-4xl">
          <img
            src="/logo.png"
            alt="logo"
            className="bg-black w-12 h-12 rounded-md bg-cover bg-center"
          />
          <span className="hidden sm:block">LogoLumina</span>
        </div>
        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button
            className="flex items-center gap-2 text-md"
            onClick={() => DownloadIcon(Date.now())}
          >
            <Download /> Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
