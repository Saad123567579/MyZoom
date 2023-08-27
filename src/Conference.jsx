import React, { useState,useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { } from './hooks/useAllUsers';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {RxCross2} from "react-icons/rx";
import {  addDoc } from 'firebase/firestore'; // Make sure to import query, where, getDocs, and addDoc
import { meetingRef } from './utils/firebase'; // Make sure to import your firebaseAuth and userRef objects
import {toast} from "react-toastify"
const Conference = () => {
    const [inviters, setinviters] = useState([]);
    useEffect(() => {
      console.log("inviters are",inviters);
    }, [inviters])
    


    useAuth(); // Call useAuth hook
    function generateUniqueId() {
        const timestamp = Date.now().toString();
        const randomDigits = Math.floor(Math.random() * 100000).toString().padStart(5, '0'); // Generate 5-digit random number
        const uniqueId = timestamp + randomDigits;
      
        return uniqueId.substring(0, 10); // Take the first 10 digits
      }
    const {
        register,
        handleSubmit,

    } = useForm();
    const navigate = useNavigate();
    const users = useSelector((state) => state?.auth?.otherusers);
    const user = useSelector((state) => state?.auth?.user);

    if (!users) {
        return <>Loading...</>;
    }

    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // Adding 1 because months are 0-indexed
    if (month < 10) {
        month = '0' + month; // Prefix with 0 if single digit month
    }
    const day = today.getDate();
    var minDate = `${year}-${month}-${day}`;
    const onSubmit = async (data) => {

        if(inviters.length===0) return toast.info("Please Select Participants");
        const createdBy = user;
        const type = "conference";
        const uid = generateUniqueId();
        const status = true;
        const obj = {...data,type,createdBy , inviters,uid,status};
        await addDoc(meetingRef, obj);
        toast.success("Meeting Created");
        console.log("done");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
    }
    const handleInviters = (event) => {
        let val = event.target.value;
        setinviters((prevInviters) => [...prevInviters, val]);
        event.target.disabled = true;
    };
    const removeInviter = (items) => {
        if (inviters.includes(items)) {
        const updatedInviters = inviters.filter((item) => item !== items);
        setinviters(updatedInviters);
        if(document.getElementById(items).disabled) document.getElementById(items).disabled = false;

        }
      };



    return (
        <div  >
            {users ? (
                <>
                    <Navbar />
                    <div className="flex justify-center items-center h-screen bg-gray-100">
                        <div className="w-96 bg-white p-8 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Create Video Conference</h2>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="mb-4">
                                    <label htmlFor="meetingName" className="block font-medium mb-1">
                                        Meeting Name
                                    </label>
                                    <input
                                        {...register("name", { required: true, minLength: 3 })}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="Enter meeting name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="inviteUser" className="block font-medium mb-1">
                                        Invite Users
                                    </label>
                                    <select
                                        multiple
                                        id="inviteduser"
                                        name="inviteduser"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        <option value="#" disabled>
                                            Select a participant
                                        </option>
                                        {users.map((user) => (
                                            <option onClick={handleInviters} id={user?.name} key={user?.uid} value={user?.name}>
                                                {user?.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='m-2'>
                                      
                                            {inviters?.length ? (
                                            inviters.map((item, index) => (
                                                <div key={index} className='bg-zoom-green rounded-xl flex h-1/2 w-1/2 justify-center items-center m-2'>
                                                    <h1  className=''>{item} </h1>
                                                    <div className='flex justify-end cursor-pointer' value={item}  onClick={() => removeInviter(item)}><RxCross2/></div>
                                                </div>
                                            ))
                                        ) : (
                                            <div>No users Selected</div>
                                        )}
                                       
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label for="meetingDate">Meeting Date:</label>
                                    <input type="date" id="meetingDate" name="meetingDate" min={minDate} {...register("date", { required: true })} />


                                </div>

                                <div className="flex justify-between">
                                    <button
                                        onClick={() => navigate('/dashboard')}
                                        type="button"
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div >
    );
};

export default Conference;

