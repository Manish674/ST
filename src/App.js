import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-3xl flex justify-end cursor-pointer pr-4 pt-4 h-[5vh] bg-black text-white">
        <AiOutlineMenu onClick={() => setOpen(!open)} />
      </div>
      <div className="bg-black h-[95vh] w-full flex justify-center items-center">
        <Sidebar open={open} />
      </div>
    </>
  );
};

export default App;
