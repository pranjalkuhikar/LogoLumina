/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/Icons";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
const BASE_URL = "https://logoexpress.tubeguruji.com";
const IconList = ({ selectedIcon }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const [pngIconList, setPngIconList] = useState([]);

  useEffect(() => {
    getPngIcons();
  }, []);
  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((res) => {
      console.log(res.data);
      setPngIconList(res.data);
    });
  };
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
  return (
    <>
      <div>
        <div>
          <label className="font-semibold">Icon</label>
          <div
            onClick={() => setOpenDialog(true)}
            className="p-3 cursor-pointer bg-gray-200 dark:text-black rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"
          >
            {icon?.includes(".png") ? (
              <img src={BASE_URL + "/png/" + icon} />
            ) : (
              <Icon name={icon} color={"#000"} size={20} />
            )}
          </div>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog} className="m-10">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pick Your Favorite Icon</DialogTitle>
              <DialogDescription>
                <Tabs defaultValue="icon" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="icon">Icons</TabsTrigger>
                    <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                  </TabsList>
                  <TabsContent value="icon">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6 overflow-auto h-[400px]">
                      {iconList.map((icon, index) => (
                        <div
                          key={index}
                          className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                          onClick={() => {
                            selectedIcon(icon);
                            setOpenDialog(false);
                            setIcon(icon);
                          }}
                        >
                          <Icon name={icon} color={"#848484"} size={20} />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="color-icon">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6 overflow-auto h-[400px]">
                      {pngIconList.map((icon, index) => (
                        <div
                          key={index}
                          className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                          onClick={() => {
                            selectedIcon(icon);
                            setOpenDialog(false);
                            setIcon(icon);
                          }}
                        >
                          <img src={BASE_URL + "/png/" + icon} />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default IconList;
