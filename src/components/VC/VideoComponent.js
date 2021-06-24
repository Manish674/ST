import React from "react";
import Notifications from "./Notifications";
import Options from "./Options";
import VideoPlayer from "./VideoPlayer";

const VideoComponent = () => {
  return (
    <>
    <div className="flex flex-col w-max justify-start">
      <div className="">
        <Options>
          <Notifications />
        </Options>
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
    </>
  );
};

export default VideoComponent;
