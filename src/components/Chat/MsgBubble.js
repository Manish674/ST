import React from "react";

const MsgBubble = ({ text, uid, photoURL }) => {
  console.log(text, uid, photoURL);
  return (
    <div className="inline w-max rounded-b-lg rounded-r-lg p-2 space-x-1 bg-[#e7cbcb] ">
      <img className="inline rounded-full w-8" src={photoURL} alt="" />
      <h4 className="inline">{text}</h4>
    </div>
  );
};

export default MsgBubble;
