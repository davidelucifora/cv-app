import React from "react";
import { auth } from "./../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const provider = new GoogleAuthProvider();

  function testLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }
  return (
    <div class="login">
      <button onClick={testLogin}></button>
    </div>
  );
}
