import React, { useState } from "react";
import axios from "axios";
import "./loginUser.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = () => {
    const body = {
      userName,
      password,
    };
    axios.post("/api/login", body).then((res) => {
    history.push('/about')
    console.log('Success')});
  };

  return (
    <div className="Login-container">
      <div className="Logo-login">
        <h1 className="Logo-login-background">Modern Finance</h1>
      </div>
      <div className="Input-container">
        <input
          className="Inputs"
          placeholder="USERNAME"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="Input-container">
        <input
          className="Inputs"
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="Buttons-login" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
