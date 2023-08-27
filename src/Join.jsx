import React from 'react'
import { useAuth } from './hooks/useAuth'
import { useParams } from "react-router-dom"
import { meetingRef } from './utils/firebase';
import { query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
const Join = () => {
    useAuth();


    const [status, setstatus] = useState(null);
    const user = useSelector((state) => state?.auth?.user);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        if (!user) return;
        const fetchData = async () => {
            const query1 = query(meetingRef, where("uid", "==", id));
            const isMeeting = await getDocs(query1);
            if (isMeeting.docs.length > 0) {
                const data = isMeeting.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.map((item) => {
                    if (item.createdBy.name === user.name || item?.inviters?.includes(user.name) || item?.inviteduser?.includes(user.name)) {
                        setstatus("allowed");
                    }
                    else {
                        setstatus("notallowed");

                    }
                })
            }
            else {
                setstatus("meeting not found");
            }
        }
        fetchData();
    }, [user, id])
    var appId = 658378088;
    var serverSecret = '9f1ee1c97f01a0f4a3ca7c03071f37d5';



    const myMeeting = async (element) => {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, id, user?.uid, user?.name);
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            maxUsers: 10,
            sharedLinks: [{
                name: "Live Link",
                url: `${window.location.href}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        })


    };









    return (
        <div className=''>
        {status === null && (
          <>
            <Navbar />
            <div className='flex-grow flex justify-center items-center text-4xl font-bold'>
              Loading...
            </div>
          </>
        )}
        {status === "notallowed" && (
          <>
            <Navbar />
            <div className='flex-grow flex justify-center items-center text-4xl font-bold'>
              Access Denied
            </div>
          </>
        )}
        {status === "meeting not found" && (
          <>
            <Navbar />
            <div className='flex-grow flex justify-center items-center text-4xl font-bold'>
              Invalid Meeting
            </div>
          </>
        )}
        {status === "allowed" && (

          <div className='flex-grow w-full h-full'>
            <Navbar />
            <div
              
              className='mt-4 font-bold flex justify-center items-center text-4xl'
            >
              <div className='w-full h-full' ref={myMeeting}></div>
            </div>
          </div>


        )}
      </div>


    )
}

export default Join

//this file now containts all the zegocloud thing 