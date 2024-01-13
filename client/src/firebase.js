// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-21f22.firebaseapp.com",
  projectId: "mern-project-21f22",
  storageBucket: "mern-project-21f22.appspot.com",
  messagingSenderId: "677451681140",
  appId: "1:677451681140:web:ab56f6d2ff2712d80e3021"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);