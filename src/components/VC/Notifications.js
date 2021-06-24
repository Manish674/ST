import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";

const Notifications = () => {

  const { callFormRef, videoPlayerRef ,call, answerCall, callAccepted } = useContext(SocketContext);
  
  const handleClick = () => {
    answerCall()

    callFormRef.current.className = "hidden"
    videoPlayerRef.current.className = "flex flex-col"
  }
  

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <button
          className="bg-[#b3b3ec] rounded-lg p-2 text-white"
          onClick={() => handleClick()}
        >
        {call.name} is calling 
        </button>
      )}
    </>
  );
};

export default Notifications;
