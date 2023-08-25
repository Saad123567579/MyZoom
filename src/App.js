import React from 'react';
import './index.css';
import Login from './Login';
import Notfound from './Notfound';
import Dashboard from './Dashboard';
import Createmeeting from './Createmeeting';
import Oneon from './Oneon';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useAllUsers} from "./hooks/useAllUsers";
function App() {
  useAllUsers();
  return (
    <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login/>} />
        <Route  path="/dashboard" element={<Dashboard/>} />
        <Route  path="/createmeeting" element={<Createmeeting/>} />
        <Route  path="/onemeeting" element={<Oneon/>} />

        <Route  path="*" element={<Notfound/>} />


        </Routes>
  </BrowserRouter>
  );
}

export default App;
