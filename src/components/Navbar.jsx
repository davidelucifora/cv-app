import React from "react";
import { auth } from "./../utils/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

export default function Navbar(props) {
  const provider = new GoogleAuthProvider();

  // Watch if user is signed in or out
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.setUser(user);
      } else props.setUser({});
    });
  }, []);

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }

  function handleLogout() {
    signOut(auth, provider)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }

  return (
    <div className="navbar">
      <button onClick={handleLogin}>
        {props.user.displayName ? props.user.displayName : "Login"}
      </button>
      {props.user.displayName && (
        <div className="logged-in-btns">
          <button onClick={props.saveData}>Save Progress</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
