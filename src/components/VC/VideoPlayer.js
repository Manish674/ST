import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";
import { MdCallEnd } from 'react-icons/md';

const VideoPlayer = () => {
  const { leaveCall, videoPlayerRef,  name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const handleHangUpCall = () => {
    videoPlayerRef.current.className="hidden"

    leaveCall();
  } 

  return (
    <div ref={videoPlayerRef} className="hidden">
    <div className="w-[100vw]  flex flex-wrap justify-around items-center ">
      {stream && (
        <div>
          <h3>{name || "name"}</h3>
          <video
            playsInline
            ref={myVideo}
            muted
            autoPlay
            className="w-[80vw] max-w-[577.2px]   w-full"
          />
        </div>
      )}

      {callAccepted && !callEnded && (
        <div>
          <h3>{call.name}</h3>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className="w-[80vw]  max-w-[577.2px] "
          />
        </div>
      )}
    </div>

      {callAccepted && !callEnded && (
        

            <button
              className="max-w-[324px] mx-auto text-2xl w-full p-2 rounded-md mt-4 w-4/5 bg-[#cc7c7c] duration-150 hover:bg-[#bf5252] flex justify-center"
              onClick={() => handleHangUpCall()}
            >
             <MdCallEnd /> 
            </button>
      )}
    </div>
  );
};

export default VideoPlayer;
