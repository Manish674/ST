import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {BiPaste} from 'react-icons/bi';
import { SocketContext } from "./SocketContext";


const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");
  const { callFormRef, me, callAccepted, name, setName, callEnded, callUser } =
    useContext(SocketContext);

  return (
    <div ref={callFormRef} className={`p-8 shadow-2xl  space-y-8 flex flex-col justify-center items-center`}>
      <div className="flex ">
        {/*Name field and copy id field*/}
        <div className="">
          <label for="name" className="text-2xl mr-4" id="name">Name</label>
          <input
            id="name"
            className="shadow-2xl p-2 outline-none rounded-md border border-black"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
          <CopyToClipboard text={me}>
            <div className="bg-gray-400  ml-4 flex justify-center items-center rounded-lg">
              <BiPaste className="text-3xl cursor-pointer" />
            </div>
          </CopyToClipboard> {/*Paste icons*/}
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <label for="id" className="text-2xl mr-4">ID</label>
          <div className="">
            <input
              className="shadow-2xl p-2 outline-none rounded-md border border-black"
              placeholder="ID to Call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4"> {/*button holder*/}
            {!callAccepted && !callEnded && (
              <button
                className="rounded-md outline-none p-1 w-full bg-[#BAE2F9] duration-150 hover:bg-[#88cef7]"
                onClick={() => callUser(idToCall)}
              >
                Call
              </button>
            )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Options;

