import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <>
      {stream && (
        <div>
          <h3>{name || "name"}</h3>
          <video
            playsInline
            ref={myVideo}
            muted
            autoPlay
            className="w-[20rem] border h-[20rem]"
          />
        </div>
      )}

      {callAccepted && !callEnded && (
        <div>
          <h3>{call.name}</h3>
          <video
            playsInline
            muted
            ref={userVideo}
            autoPlay
            className="w-[20rem] border h-[20rem]"
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
