import React from "react";
import firebase from "firebase";
import { auth } from "../../firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="h-full flex justify-center items-center">
      <button
        className="p-4 duration-150 bg-[#8ec8fd] rounded-lg hover:text-white"
        onClick={signInWithGoogle}
      >
        SignIn
      </button>
    </div>
  );
};

export default SignIn;
