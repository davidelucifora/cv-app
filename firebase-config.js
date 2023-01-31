// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAcvGxXKEm1i-fEEqGomJeab_MtvcNHE",
  authDomain: "cv-app-15c8a.firebaseapp.com",
  projectId: "cv-app-15c8a",
  storageBucket: "cv-app-15c8a.appspot.com",
  messagingSenderId: "460263600293",
  appId: "1:460263600293:web:d1e8663025c122eb131d4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
