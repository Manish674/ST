import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";

import Chat from "./Chat/Chat";
import SignIn from "./Chat/SignIn";

const Sidebar = ({ open }) => {
  const [user] = useAuthState(auth);
  const translateValue = open ? "translate-x-[100%]" : "";
  const display = open ? "none" : "";
  return (
    <div
      className={`duration-500 ${display} transform ${translateValue} absolute right-0 bg-gray-700 w-4/5 h-[95%]`}
    >
      {user ? <Chat /> : <SignIn />}
    </div>
  );
};

export default Sidebar;
