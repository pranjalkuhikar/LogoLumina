import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { UpdateStorageContext } from "./context/UpdateStorageContext.js";

function App() {
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <Body downloadIcon={downloadIcon} />
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
