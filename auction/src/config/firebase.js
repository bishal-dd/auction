// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmteY-vzRu5GxpOLuLY5O3U-sM9O0YUbw",
  authDomain: "mini-project-9e8f0.firebaseapp.com",
  projectId: "mini-project-9e8f0",
  storageBucket: "mini-project-9e8f0.appspot.com",
  messagingSenderId: "946728463732",
  appId: "1:946728463732:web:6a17547a3b14723d661021",
  measurementId: "G-LR1Z1PCXL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;