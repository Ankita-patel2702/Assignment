// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8q-PEIcA6DmYO0aHTTP5BRe-UNFgMVY",
  authDomain: "taskproject-5ea2e.firebaseapp.com",
  projectId: "taskproject-5ea2e",
  storageBucket: "taskproject-5ea2e.firebasestorage.app",
  messagingSenderId: "691471232841",
  appId: "1:691471232841:web:1a407520fec72b83f17498",
  measurementId: "G-8HJK0ET99M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
