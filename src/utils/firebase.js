// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCc1Eeqv2Nfi_WSdS7GQBwbl8_fHo12D8",
  authDomain: "netflixgpt-939eb.firebaseapp.com",
  projectId: "netflixgpt-939eb",
  storageBucket: "netflixgpt-939eb.appspot.com",
  messagingSenderId: "148940972357",
  appId: "1:148940972357:web:7326e6bf871f123a611e2c",
  measurementId: "G-DJNN1MJV05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();