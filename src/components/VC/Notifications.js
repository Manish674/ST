import React, { useContext } from "react";

import { SocketContext } from "./SocketContext";

const Notifications = () => {
  const { call, answerCall, callAccepted } = useContext(SocketContext);
  console.log(call.isReceivingCall);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <button
          className="bg-[#b3b3ec] rounded-lg p-2 text-white"
          onClick={() => answerCall()}
        >
          {call.name || "someone is calling"}
        </button>
      )}
    </>
  );
};

export default Notifications;
