import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Countdown from "./components/viewer/Countdown";
import FastFinger from "./components/viewer/FastFinger";
import Notification from "./components/viewer/FastFinger/Notification";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/countdown" replace/>} />
        <Route path="/fastFinger" element={<FastFinger />}/>
        <Route path="/countdown" element={<Countdown />}/>
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  )
}

export default App;