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
import { appendotheruser } from "./redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Conference from "./Conference";
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createmeeting" element={<Createmeeting />} />
        <Route path="/onemeeting" element={<Oneon />} />
        <Route path="/conference" element={<Conference />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
