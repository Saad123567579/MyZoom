import React from 'react';
import './index.css';
import Login from './Login';
import Notfound from './Notfound';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login/>} />
        <Route  path="*" element={<Notfound/>} />

        </Routes>
  </BrowserRouter>
  );
}

export default App;
