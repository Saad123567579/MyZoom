import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh7ND95w0y9JjXxBX-pCCDWn_rPXgAcqc",
  authDomain: "myzoom-d1062.firebaseapp.com",
  projectId: "myzoom-d1062",
  storageBucket: "myzoom-d1062.appspot.com",
  messagingSenderId: "914645383032",
  appId: "1:914645383032:web:04fabeb3b848055c40ba8d",
  measurementId: "G-DE9PP1R1JH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const userRef = collection(firebaseDB, "user");
export const meetingRef = collection(firebaseDB, "meeting");

