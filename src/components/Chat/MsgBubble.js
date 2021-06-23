import React from "react";
import { auth } from "../../firebase";

const MsgBubble = ({ text, uid, photoURL }) => {
  const bg = uid === auth.currentUser.uid ? "bg-[#8ec8fd]" : "bg-[#e7cbcb]";
  const position = uid === auth.currentUser.uid ? "justify-end" : "";

  return (
    <div className={`w-[90%] mx-auto flex ${position}`}>
      <div className={` inline w-max rounded-lg p-2 space-x-1 ${bg} `}>
        <img className="inline rounded-full w-8" src={photoURL} alt="" />
        <h4 className="inline">{text}</h4>
      </div>
    </div>
  );
};

export default MsgBubble;
