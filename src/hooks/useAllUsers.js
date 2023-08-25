import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { query, where, getDocs } from "firebase/firestore"; // Make sure to import query, where, getDocs, and addDoc
import { userRef } from "../utils/firebase"; // Make sure to import your firebaseAuth and userRef objects
import {appendotheruser} from "../redux/authSlice";
export function useAllUsers() {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

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
}
