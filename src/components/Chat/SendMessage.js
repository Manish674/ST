import React, {useState} from "react";
import {db, auth} from "../../firebase";
import firebase from "firebase";

const SendMessage = () => {
  const [msg, setMsg] = useState("");

  const sendMsg = async (e) => {
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL,
    });
    setMsg("");
  };

  return (
    <>
      <form className="w-full  absolute insert-x-0 bottom-0" onSubmit={sendMsg}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="text-black w-full  p-2 rounded-lg outline-none"
          placeholder="message"
        />
      </form>
    </>
  );
};

export default SendMessage;
