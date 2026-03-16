// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATDY0xJ-cWMAPIly5qWX0n7_1Thy50Tac",
  authDomain: "jobsphere-e549e.firebaseapp.com",
  projectId: "jobsphere-e549e",
  storageBucket: "jobsphere-e549e.firebasestorage.app",
  messagingSenderId: "404295351280",
  appId: "1:404295351280:web:e0b43501e4d51c6804fb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};