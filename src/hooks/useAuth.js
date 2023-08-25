import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuser } from "../redux/authSlice";
import {firebaseAuth} from "../utils/firebase";

export function useAuth(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(firebaseAuth,async(currentUser)=>{
      if(!currentUser) navigate('/');
      else{
        const obj = { "name": currentUser.displayName, "email": currentUser.email, "image": currentUser.photoURL, "uid": currentUser.uid };
        await dispatch(setuser(obj))
      }
      })
    
      return () => {
        unSubscribe()
      }
    }, [dispatch,navigate])
    
}