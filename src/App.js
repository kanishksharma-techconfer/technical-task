import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserA from "./Components/User A/UserA";
import UserB from "./Components/User B/UserB";
import { v4 } from "uuid";

const Public = [
 {
  id: v4(),
  name: "User B DOM Block 1",
 },
 {
  id: v4(),
  name: "User B DOM Block 2",
 },
 {
  id: v4(),
  name: "User A DOM Block 1",
 },
 {
  id: v4(),
  name: "User A DOM Block 2",
 },
];
function App() {
 // this state is for user A
 const [states, setStates] = useState({
  Public: {
   title: "Public",
   items: Public,
  },
  Private: {
   title: "Private",
   items: [],
  },
 });

 // this state is for user B
 const [state, setState] = useState({
  Public: {
   title: "Public",
   items: Public,
  },
  Private: {
   title: "Private",
   items: [],
  },
 });
 return (
  <div className="App">
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login />} />
     <Route
      path="/user-a"
      element={<UserA state={state} setState={setState} states={states} setStates={setStates} />}
     />
     <Route
      path="/user-b"
      element={<UserB state={state} setState={setState} states={states} setStates={setStates} />}
     />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
