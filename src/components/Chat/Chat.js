import React, { useState, useEffect } from "react";
import LogOut from "./LogOut";
import { db } from "../../firebase";
import SendMessage from "./SendMessage";
import MsgBubble from "./MsgBubble";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(20)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="h-full overflow-y-scroll">
      <LogOut />
      <div className="overflow-y-hidden  space-y-4 ml-4 my-4 flex flex-col">
        {messages.map((props) => (
          <MsgBubble {...props} />
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
