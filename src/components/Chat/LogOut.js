import React from "react";
import { auth } from "../../firebase";

const LogOut = () => {
  return (
    <div>
      <button className="bg-[lightblue] p-4" onClick={() => auth.signOut()}>
        logout
      </button>
    </div>
  );
};

export default LogOut;
