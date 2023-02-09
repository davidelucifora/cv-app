// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
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
export const app = initializeApp(firebaseConfig);
// export const db = getFireStore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
