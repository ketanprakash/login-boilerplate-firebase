// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkJ0khncnFyE317brwcJpXQeKr90paQ7E",
  authDomain: "konekt-c7c2b.firebaseapp.com",
  projectId: "konekt-c7c2b",
  storageBucket: "konekt-c7c2b.appspot.com",
  messagingSenderId: "1000689028576",
  appId: "1:1000689028576:web:44ffb854d7d42ac4382f85",
  measurementId: "G-QHHBVW3XVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();