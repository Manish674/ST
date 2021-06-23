import React from "react";
import Notifications from "./Notifications";
import Options from "./Options";
import VideoPlayer from "./VideoPlayer";

const VideoComponent = () => {
  return (
    <>
      <div>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
};

export default VideoComponent;
