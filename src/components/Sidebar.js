import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, Route, Switch } from "react-router-dom";

import { auth } from "../firebase";

import Chat from "./Chat/Chat";
import SignIn from "./Chat/SignIn";

const Sidebar = ({ open }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`duration-500 transform translate-x-[${
        open ? "" : "100%"
      }] absolute right-0 bg-gray-700 w-4/5 h-[95%]`}
    >
      {user ? <Chat /> : <SignIn />}
    </div>
  );
};

export default Sidebar;
