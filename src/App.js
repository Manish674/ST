import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./components/Sidebar";
import VideoComponent from "./components/VC/VideoComponent";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="text-3xl flex justify-end  pr-4 pt-2 h-[5vh] bg-black text-white">
        <AiOutlineMenu
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="bg-black h-[95vh] w-full flex justify-center items-center">
        <Sidebar open={open} />
        <div className="w-full h-full flex justify-center items-center">
          <VideoComponent />
        </div>
      </div>
    </>
  );
};

export default App;
