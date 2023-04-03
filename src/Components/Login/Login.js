import React, { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const handleEmailChange = (e) => {
  //   setUsername(e.target.value)
  //   console.log(username)
  // }
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value)
  //   console.log(password)
  // }
  const loginUser = () => {
    if(username === "user_a@system.com" && password === "usera123"){
      navigate('/user-a')
    }
    else if(username === "user_b@system.com" && password === "userb123"){
      navigate('/user-b')
    }
    else{
      alert("User not registered or credentials are incorrect!")
    } 
  }
  return (
    <div className={styles.container}>
      <div className={styles.main_box}>
        <form onSubmit={loginUser}>
          <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
