import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./components/Sidebar";
import VideoComponent from "./components/VC/VideoComponent";
import Todo from './components/Todo/'


const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="text-3xl flex justify-end  items-center pr-4 pt-2 h-[8vh]  text-black">
        <AiOutlineMenu
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

        <Sidebar open={open} />
        <div className="h-[87vh]  flex justify-start items-center">
          <VideoComponent />
        </div>
      <Todo />
    </>
  );
};

export default App;
