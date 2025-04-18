// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2z6dQfXRT40zIvUY5d9LUFPdMjPec1RU",
  authDomain: "eco-finder-77fbd.firebaseapp.com",
  projectId: "eco-finder-77fbd",
  storageBucket: "eco-finder-77fbd.firebasestorage.app",
  messagingSenderId: "1030288630645",
  appId: "1:1030288630645:web:72a341eb080890183ca93c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
