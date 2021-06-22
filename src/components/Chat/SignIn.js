import React from "react";
import firebase from "firebase";
import { auth } from "../../firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button
        className="hover:bg-[black] hover:text-white"
        onClick={signInWithGoogle}
      >
        Sign in with google
      </button>
    </div>
  );
};

export default SignIn;
