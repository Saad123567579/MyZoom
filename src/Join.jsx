import React from 'react'
import { useAuth } from './hooks/useAuth'
import {useParams} from "react-router-dom"
const Join = () => {
    const params = useParams();
    console.log(params);
    useAuth();
  return (
    <div>
      join
    </div>
  )
}

export default Join
