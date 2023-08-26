import React from 'react'
import { useSelector } from "react-redux";
import { firebaseAuth } from "./utils/firebase"; // Make sure to import your firebaseAuth and userRef objects
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state?.auth?.user);
  console.log(user);

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();
      // Redirect to the front page or any desired route
      window.location.href = "/"; // Change this to your desired route
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className=" h-16 flex border-b-2  shadow-lg bg-slate-300">
        <div className=" w-full h-full flex items-center justify-start ml-2">
          <h1 className="font-extrabold text-2xl md:text-4xl lg:text-4xl text-zoom-blue cursor-pointer" onClick={()=>navigate('/dashboard')}>
            ZOOM
          </h1>
        </div>
        <div className=" w-full h-full flex items-center justify-center">
          <h1 className="font-extrabold text-xl md:text-4xl lg:text-4xl text-zoom-blue">
            Hello, {user?.name}
          </h1>
        </div>
        <div
          className=" w-full h-full flex items-center justify-end cursor-pointer  "
          onClick={handleLogout}
        >
          <svg
            class=" mr-4 w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
            />
          </svg>
        </div>
      </div>
  )
}

export default Navbar
