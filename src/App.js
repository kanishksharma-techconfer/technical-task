import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserA from "./Components/User A/UserA";
import UserB from "./Components/User B/UserB";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user-a" element={<UserA />} />
          <Route path="/user-b" element={<UserB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
