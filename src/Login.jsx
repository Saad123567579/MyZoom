import './index.css';
import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, userRef } from './utils/firebase'; // Make sure to import your firebaseAuth and userRef objects
import { query, where, getDocs, addDoc } from 'firebase/firestore'; // Make sure to import query, where, getDocs, and addDoc

const Login = () => {
    const handleLogin = async() => {
        const provider = new GoogleAuthProvider();
        // try {
          const { user } = await signInWithPopup(firebaseAuth, provider);
          const obj = { "name": user.displayName, "email": user.email, "image": user.photoURL, "uid": user.uid };
          const firestoreQuery = query(userRef, where("uid", "==", user.uid));
          const fetchedUsers = await getDocs(firestoreQuery);
          if (fetchedUsers.docs.length === 0) {
            await addDoc(userRef, obj);
            console.log("User added");
          } else {
            console.log("User already exists");
          }
        // } catch (e) {
        //   console.log(e);
        // }
      }
  return (
    <div className='w-screen h-screen  flex flex-col justify-center items-center bg-slate-200'>
    <img alt="img" src="https://www.pngarts.com/files/7/Zoom-Logo-Free-PNG-Image.png" />
    <h1 className="font-bold text-4xl text-zoom-blue">One Platform To Connect</h1>
    <button onClick={handleLogin} className="bg-zoom-blue rounded-lg p-2 mt-4 text-white font-semibold hover:bg-zoom-dark-blue">Login With Google</button>
  </div>
  )
}

export default Login
