import React from 'react';
import './index.css';
import Login from './Login';
import Notfound from './Notfound';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login/>} />
        <Route  path="/dashboard" element={<Dashboard/>} />
        <Route  path="*" element={<Notfound/>} />


        </Routes>
  </BrowserRouter>
  );
}

export default App;
