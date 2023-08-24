// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh7ND95w0y9JjXxBX-pCCDWn_rPXgAcqc",
  authDomain: "myzoom-d1062.firebaseapp.com",
  projectId: "myzoom-d1062",
  storageBucket: "myzoom-d1062.appspot.com",
  messagingSenderId: "914645383032",
  appId: "1:914645383032:web:04fabeb3b848055c40ba8d",
  measurementId: "G-DE9PP1R1JH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);