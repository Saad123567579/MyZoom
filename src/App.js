import React, { useEffect } from "react";
import "./index.css";
import Login from "./Login";
import Notfound from "./Notfound";
import Dashboard from "./Dashboard";
import Createmeeting from "./Createmeeting";
import Oneon from "./Oneon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { query, where, getDocs } from "firebase/firestore";
import { userRef } from "./utils/firebase";
import { appendotheruser, setmymeetings , setinvitedmeetings } from "./redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Conference from "./Conference";
import Viewmeeting from "./Viewmeeting";
import Mymeeting from "./Mymeeting";
import { meetingRef } from './utils/firebase'; // Make sure to import your firebaseAuth and userRef objects
import Join from "./Join";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user);
  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      const firestoreQuery = query(userRef, where("uid", "!=", user?.uid));
      const fetchedUsers = await getDocs(firestoreQuery);
      
      fetchedUsers.docs.forEach(async (doc) => {
        const otherUserData = doc.data();
        await dispatch(appendotheruser(otherUserData));
      });
    };

    fetchUsers();
  }, [user, dispatch]);

  useEffect(() => {
    if (!user) return;
  
    const fetchData = async () => {
      const firestoreQuery = query(meetingRef, where("createdBy.uid", "==", user.uid));
      const querySnapshot = await getDocs(firestoreQuery);
  
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      await dispatch(setmymeetings(fetchedData));
    };
  
    fetchData();
  }, [user,dispatch]);

  useEffect(() => {
    if (!user) return;
  
    const fetchData = async () => {
      const query1 = query(meetingRef, where("inviters", "array-contains", user.name));
      const query2 = query(meetingRef, where("inviteduser", "array-contains", user.name));
  
      const [querySnapshot1, querySnapshot2] = await Promise.all([
        getDocs(query1),
        getDocs(query2)
      ]);
  
      const fetchedData1 = querySnapshot1.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
  
      const fetchedData2 = querySnapshot2.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
  
      const combinedData = [...fetchedData1, ...fetchedData2];
      await dispatch(setinvitedmeetings(combinedData));
     
    };
  
    fetchData();
  }, [user,dispatch]);
  
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createmeeting" element={<Createmeeting />} />
        <Route path="/onemeeting" element={<Oneon />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/mymeeting" element={<Mymeeting />} />
        <Route path="/viewmeeting" element={<Viewmeeting />} />
        <Route path="/join/:id" element={<Join />} />


        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
