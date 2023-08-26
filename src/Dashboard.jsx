import React from "react";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useAuth();
  
  return (
    <div className=" w-full h-screen flex-col md:flex-row lg:flex-row justify-center items-center md:justify-center md:items-center bg-slate-200 ">
      <Navbar />

      <div className="w-full h-full md:flex lg:flex justify-center text-center md:justify-center md:text-center md:h-72 md:w-full ">
        <div
          onClick={() => navigate("/createmeeting")}
          className="h-2/6 w-full lg:h-full lg:w-2/6 md:h-2/6 md:w-full flex flex-col justify-center items-center hover:shadow-lg cursor-pointer bg-slate-300 mt-4 md:m-4"
        >
          <div className="text-8xl">
            <svg
              className="w-12 h-12 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl md:text-4xl">Create Meeting</h1>
          <p className="font-semibold text-xl md:text-2xl">
            Create a new meeting and invite others
          </p>
        </div>

        <div onClick={()=>navigate('/mymeeting')} className="h-2/6 w-full lg:h-full lg:w-2/6 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer bg-slate-300 mt-4 md:m-4">
          <div className="text-8xl">
            <svg
              className="w-12 h-12 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
              />
            </svg>
          </div>
          <h1 className="font-bold  text-2xl md:text-4xl">My Meetings</h1>
          <p className="font-semibold text-xl md:text-2xl">
            View Your created meetings
          </p>
        </div>

        <div onClick={()=>navigate('/viewmeeting')} className="h-2/6 w-full lg:h-full lg:w-2/6 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer bg-slate-300 mt-4 md:m-4">
          <div className="text-8xl">
            <svg
              className="w-12 h-12 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl md:text-4xl">View Meeting</h1>
          <p className="font-semibold text-xl md:text-2xl">
            View the meetings you are invited to
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


