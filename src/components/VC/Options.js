import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "./SocketContext";

const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  return (
    <div>
      <div className="mt-4">
        <h3 className="text-2xl mx-auto w-max">Account Info</h3>
        <div className="flex flex-col">
          <input
            className="text-black w-4/5 mx-auto  mt-1 "
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <CopyToClipboard text={me}>
            <button className="bg-[#36469a] mt-4 rounded-lg">Copy ID</button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl mx-auto w-max">Make a Call</h3>
        <div className="flex flex-col">
          <input
            className="text-black w-4/5 mx-auto  mt-1 "
            placeholder="ID to Call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button
              className="bg-[#e44242] mt-4 rounded-lg"
              onClick={leaveCall}
            >
              Hang Up
            </button>
          ) : (
            <button
              className="bg-[#36469a] mt-4 rounded-lg"
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
